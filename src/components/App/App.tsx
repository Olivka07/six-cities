import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import MainPage from '../../pages/MainPage/MainPage';
import NotFound from '../../pages/NotFound/NotFound';
import LoginPage from '../../pages/LoginPage/LoginPage';
import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage';
import { AppRoute, AuthorizationStatus } from '../../constants/constants';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';
import { HelmetProvider } from 'react-helmet-async';
import { OfferPage } from '../../pages/OfferPage/OfferPage';
import { ReviewsBlock } from '../../types/reviews.types';
import { OffersCity } from '../../types/offersCity.types';
import { CityTypes } from '../../types/city.types';
import { Offer } from "../../types/offers.types";




interface AppProps {
  reviewsBlock: ReviewsBlock
  offersCity: OffersCity[]
  city: CityTypes
  offers: Offer[]
}

function App({ reviewsBlock, offersCity, city, offers }: AppProps): JSX.Element {

  return (
    <HelmetProvider>
      <BrowserRouter >
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage offers={offers} city={city} />}
          />
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRoutes redirectTo={AppRoute.Login} authorizationStatus={AuthorizationStatus.NoAuth}>
                <LoginPage />
              </PrivateRoutes>
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoutes redirectTo={AppRoute.Login} authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesPage offersCity={offersCity} />
              </PrivateRoutes>
            } />
          <Route path={`${AppRoute.Offer}`} element={<OfferPage offers={offers} reviewsBlock={reviewsBlock} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>

  );
}

export default App;
