import { call, all, takeLatest, put } from 'redux-saga/effects';

import { actions } from './reducer';
import { fetchCasesByCountry } from '../../api/country-cases';
import { Cases } from '../../store/cases/types';

export function* requestCountriesCases() {
  try {
    const response: { value: Cases } = yield call(fetchCasesByCountry);
    yield put(actions.fetchCasesByCountrySuccess(response));
  } catch (error) {
    yield put(actions.fetchCasesByCountryFailure(error));
  }
}

export function* countriesCasesWatcher() {
  yield all([takeLatest(actions.fetchCasesByCountryRequest, requestCountriesCases)]);
}
