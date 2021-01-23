import { createSelector } from 'reselect';

import { AppState } from '../../store/types';
import { TrainTripsState, TrainTrips } from '../../store/train-trips/types';

export const trainTripsListStateSelector = (state: AppState): TrainTripsState =>
  state.trainTripsList;

export const getTrainTripsList = createSelector(
  trainTripsListStateSelector,
  (trainTripsList: TrainTripsState): TrainTrips => trainTripsList.items,
);
