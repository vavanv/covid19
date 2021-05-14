import { call, all, takeLatest, put } from 'redux-saga/effects';

import { actions } from './reducer';
import { fetchCoverage } from '../../api/coverage';
import { Coverage } from '../../store/coverage/types';

export function* requestCoverage() {
  try {
    const response: Coverage = yield call(fetchCoverage);
    yield put(actions.fetchCoverageSuccess(response));
  } catch (error) {
    yield put(actions.fetchCasesByCountryFailure(error));
  }
}

export function* coverageInfoWatcher() {
  yield all([takeLatest(actions.fetchCoverageRequest, requestCoverage)]);
}
