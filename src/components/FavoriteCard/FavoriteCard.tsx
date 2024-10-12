import { CommonOffer } from '../../types/offers';
import { FavoriteCardOffer } from './components/FavoriteCardOffer/FavoriteCardOffer';

type FavoriteCardProps = {
    cityName: string;
    offersInCity: CommonOffer[];
}
export const FavoriteCard = ({ cityName, offersInCity }: FavoriteCardProps) => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{cityName}</span>
        </a>
      </div>
    </div>
    <div className="favorites__places">
      { offersInCity.map((offer) => <FavoriteCardOffer offer={offer} key={offer.id}/>) }
    </div>
  </li>
);