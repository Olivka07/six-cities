import { createAsyncThunk } from '@reduxjs/toolkit';
import { TAppDispatch, TState } from '../../types/state.types';
import { AxiosInstance, AxiosResponse } from 'axios';
import { AuthCredentials, TUser } from '../../types/user.types';
import { APIRoute } from '../../constants/api';
import { dropToken, setToken } from '../../services/token';
import { redirectToRoute } from '../action';
import { AuthStatus } from '../../constants/user';
import { AppRoute } from '../../constants/routes';
import { setAuthorizationStatus } from './user-reducer';

export const checkAuth = createAsyncThunk<void, undefined,
  {
      state: TState;
      dispatch: TAppDispatch;
      extra: AxiosInstance;
  }
>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const user = await api.get<TUser>(APIRoute.Login);
      setToken(user.data.token);
      dispatch(setAuthorizationStatus(AuthStatus.Authorized));
    } catch {
      dispatch(setAuthorizationStatus(AuthStatus.Unauthorized));
      dispatch(redirectToRoute(AppRoute.Login));
    }
  }
);

export const login = createAsyncThunk<void, AuthCredentials,
  {
      state: TState;
      dispatch: TAppDispatch;
      extra: AxiosInstance;
  }
>(
  'user/login',
  async (authCredentials, { dispatch, extra: api }) => {
    try {
      const user = await api.post<AuthCredentials, AxiosResponse<TUser>>(APIRoute.Login, authCredentials);
      setToken(user.data.token);
      dispatch(setAuthorizationStatus(AuthStatus.Authorized));
      dispatch(redirectToRoute(AppRoute.Main));
    } catch {
      dispatch(setAuthorizationStatus(AuthStatus.Unauthorized));
    }
  }
);

export const logout = createAsyncThunk<void, undefined,
  {
      state: TState;
      dispatch: TAppDispatch;
      extra: AxiosInstance;
  }
>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(setAuthorizationStatus(AuthStatus.Unauthorized));
    } catch {
      dispatch(setAuthorizationStatus(AuthStatus.Authorized));
    }
  }
);