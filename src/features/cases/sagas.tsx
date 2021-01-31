import { call, all, takeLatest, put } from 'redux-saga/effects';

import { FETCH_CASES_BY_COUNTRY, fetchCasesByCountryAction } from '../../features/cases/actions';
import { fetchCasesByCountry } from '../../api/country-cases';
import { Cases } from '../../store/cases/types';

export function* requestCountriesCases() {
  try {
    const response: { value: Cases } = yield call(fetchCasesByCountry);
    yield put(fetchCasesByCountryAction.success(response));
  } catch (error) {
    yield put(fetchCasesByCountryAction.failure(error));
  }
}

export function* countriesCasesWatcher() {
  yield all([takeLatest(FETCH_CASES_BY_COUNTRY.REQUEST, requestCountriesCases)]);
}
