import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';

enum TypePlace {
  ROOM = 'Room',
  APARTMENT = 'Apartment'
}

export interface IPlace {
  id: number | string;
  name: string;
  type: TypePlace;
  price: number;
  rate: 1 | 2 | 3 | 4 | 5;
  imgSrc?: string;
  activeBookmark?: boolean;
  premium?: boolean;
}

const places: IPlace[] = [
  {
    id: 1,
    name: 'Beautiful & luxurious apartment at great location',
    type: TypePlace.APARTMENT,
    imgSrc: 'img/apartment-01.jpg',
    price: 120,
    rate: 4,
    premium: true
  },
  {
    id: 2,
    name: 'Wood and stone place',
    type: TypePlace.ROOM,
    imgSrc: 'img/room.jpg',
    price: 80,
    rate: 4,
    activeBookmark: true
  },
  {
    id: 3,
    name: 'Canal View Prinsengracht',
    type: TypePlace.APARTMENT,
    imgSrc: 'img/apartment-02.jpg',
    price: 132,
    rate: 4
  },
  {
    id: 4,
    name: 'Nice, cozy, warm big bed apartment',
    type: TypePlace.APARTMENT,
    imgSrc: 'img/apartment-03.jpg',
    price: 180,
    rate: 5,
    premium: true
  },
  {
    id: 5,
    name: 'Wood and stone place',
    type: TypePlace.ROOM,
    imgSrc: 'img/room.jpg',
    price: 80,
    rate: 4,
    activeBookmark: true
  },
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App places={places}/>
  </React.StrictMode>
);
