import { all, fork } from 'redux-saga/effects';

import { stopListItemWatcher } from '../features/stops/sagas';
import { shapeTrainsListItemsWatcher } from '../features/shapes-trains/sagas';
import { routeListItemWatcher } from '../features/routes/sagas';
import { trainTripsListItemWatcher } from '../features/train-trips/sagas';

export function* rootSaga() {
  yield all([
    fork(stopListItemWatcher),
    fork(shapeTrainsListItemsWatcher),
    fork(routeListItemWatcher),
    fork(trainTripsListItemWatcher),
  ]);
}
