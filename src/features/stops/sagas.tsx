import { call, all, takeLatest, put } from 'redux-saga/effects';

import { FETCH_STOP_LIST_ITEMS, fetchStopListItemsAction } from '../../features/stops/actions';
import { fetchStopListItems } from '../../api/stops';
import { Stops } from '../../store/stops/types';

export function* requestStopList() {
  try {
    const response: { value: Stops } = yield call(fetchStopListItems);
    yield put(fetchStopListItemsAction.success(response));
  } catch (error) {
    yield put(fetchStopListItemsAction.failure(error));
  }
}

export function* stopListItemWatcher() {
  yield all([takeLatest(FETCH_STOP_LIST_ITEMS.REQUEST, requestStopList)]);
}
