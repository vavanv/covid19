import { call, all, takeLatest, put } from 'redux-saga/effects';

import { FETCH_COUNTRIES_CASES, fetchCountriesCasesAction } from '../../features/cases/actions';
import { fetchCountriesCases } from '../../api/country-cases';
import { Cases } from '../../store/cases/types';

export function* requestCountriesCases() {
  try {
    const response: { value: Cases } = yield call(fetchCountriesCases);
    yield put(fetchCountriesCasesAction.success(response));
  } catch (error) {
    yield put(fetchCountriesCasesAction.failure(error));
  }
}

export function* countriesCasesWatcher() {
  yield all([takeLatest(FETCH_COUNTRIES_CASES.REQUEST, requestCountriesCases)]);
}
