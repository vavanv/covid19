import { all, fork } from 'redux-saga/effects';

import { countriesCasesWatcher } from '../features/cases/sagas';

export function* rootSaga() {
  yield all([fork(countriesCasesWatcher)]);
}
