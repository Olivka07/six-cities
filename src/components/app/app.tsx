import { JSX } from 'react';
import { MainPage } from '../../pages/main-page';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../../pages/login-page';
import { FavoritesPage } from '../../pages/favorites-page';
import { OfferPage } from '../../pages/offer-page';
import { NotFoundPage } from '../../pages/not-found-page';
import { PrivateRoute } from '../private-route/private-route';
import { AppRoute } from '../../constants/routes';
import { CommonOffer } from '../../types/offer.types';
import { HistoryRouter } from '../history-route/history-route';
import { browserHistory } from '../../browser-history';
import { AuthStatus } from '../../constants/user';

interface AppProps {
    offers: CommonOffer[];
}

export function App({ offers }: AppProps):JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />}/>
        <Route path={AppRoute.Login} element={<PrivateRoute needAuthStatus={AuthStatus.Unauthorized} to={AppRoute.Main}><LoginPage/></PrivateRoute>}/>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <FavoritesPage offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<OfferPage/>}/>
        <Route path={AppRoute.NotFound} element={<NotFoundPage />}/>
        <Route path='*' element={<Navigate to={AppRoute.NotFound}/>}/>
      </Routes>
    </HistoryRouter>
  );
}
