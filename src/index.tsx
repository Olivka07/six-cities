import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app';
import { offers } from './mocks/offers';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchOffers, checkAuth } from './store/api-action';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchOffers());
store.dispatch(checkAuth());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers}/>
    </Provider>
  </React.StrictMode>
);
