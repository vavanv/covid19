export interface TrainTrip {
  cars: string;
  tripNumber: string;
  startTime: string;
  endTime: string;
  lineCode: string;
  routeNumber: string;
  variantDir: string;
  display: string;
  latitude: number;
  longitude: number;
  isInMotion: boolean;
  delaySeconds: number;
  course: number;
  firstStopCode: string;
  lastStopCode: string;
  prevStopCode: string;
  nextStopCode: string;
  atStationCode: string;
  modifiedDate: string;
}

export type TrainTrips = TrainTrip[];

export interface TrainTripsState {
  items: TrainTrips;
}
