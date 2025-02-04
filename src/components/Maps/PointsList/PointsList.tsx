import { OfferPreview } from "../../../types/offers.types";


export type PointsListProps = {
  offers: OfferPreview[],
  onListItemHover: (id: string | null) => void
};

function PointsList({ offers, onListItemHover }: PointsListProps) {

  const handleListItemHover = (evt: any) => {
    onListItemHover(evt.target.innerText);
  };

  const points = offers.map((offer) => offer);

  return (

    <ul className="list">{
      points.map((point: any, index: any) => {
        const keyValue = `${index}-${point.location.title}`;

        return (
          <li
            className="list__item"
            key={keyValue}
            onMouseEnter={handleListItemHover}
          >
            {point.location.title}
          </li>
        );
      })
    }</ul>
  );
}

export default PointsList;
