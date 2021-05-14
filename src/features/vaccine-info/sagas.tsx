import { call, all, takeLatest, put } from 'redux-saga/effects';

import { actions } from './reducer';
import { fetchVaccineInfo } from './api';
import { Vaccines } from '../../store/vaccine-info/types';

export function* requestVaccineInfo() {
  try {
    const response: Vaccines = yield call(fetchVaccineInfo);
    yield put(actions.fetchVaccineInfoSuccess(response));
  } catch (error) {
    yield put(actions.fetchVaccineInfoFailure(error));
  }
}

export function* vaccineInfoWatcher() {
  yield all([takeLatest(actions.fetchVaccineInfoRequest, requestVaccineInfo)]);
}
