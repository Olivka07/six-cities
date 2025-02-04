import { LocationTypes } from "./location.types";

export type CityTypes = {
  name: string;
  location: LocationTypes
  zoom?: number
}

export type Point = {
  title: string
  latitude: number
  longitude: number
  zoom?: number
}
