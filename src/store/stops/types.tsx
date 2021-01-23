export interface Stop {
  code: string;
  stopName: string;
  city: string;
  streetName: string;
  longitude: number;
  latitude: number;
  isBus: boolean;
  isTrain: boolean;
  streetNumber: string;
  intersection: string;
  drivingDirections: string;
  facilities: Facilities;
  parkings: Parkings;
}

export interface Facility {
  description: string;
}

export interface Parking {
  name: string;
  parkSpots: number;
}

export type Stops = Stop[];
export type Facilities = Facility[];
export type Parkings = Parking[];

export interface StopsState {
  items: Stops;
  selectedItems: Stops;
}
