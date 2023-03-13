import { all, fork } from 'redux-saga/effects';

import { countriesCasesWatcher } from '../features/cases/sagas';
import { vaccineInfoWatcher } from '../features/vaccine-info/sagas';
import { coverageInfoWatcher } from '../features/coverage-info/sagas';

export function* rootSaga() {
  yield all([fork(countriesCasesWatcher), fork(vaccineInfoWatcher), fork(coverageInfoWatcher)]);
}
