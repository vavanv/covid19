import { call, all, takeLatest, put, delay } from 'redux-saga/effects';

import {
  FETCH_TRAIN_TRIPS_LIST_ITEMS,
  fetchTrainTripsListItemsAction,
} from '../../features/train-trips/actions';

import { fetchTripTrainsListItems } from '../../api/train-trips';
import { TrainTrips } from '../../store/train-trips/types';

export function* requestTrainTripsList() {
  for (;;) {
    try {
      const response: { value: TrainTrips } = yield call(fetchTripTrainsListItems);
      yield put(fetchTrainTripsListItemsAction.success(response));
    } catch (error) {
      yield put(fetchTrainTripsListItemsAction.failure(error));
      break;
    }
    yield delay(30000);
  }
}

export function* trainTripsListItemWatcher() {
  yield all([takeLatest(FETCH_TRAIN_TRIPS_LIST_ITEMS.REQUEST, requestTrainTripsList)]);
}
