import { call, all, takeLatest, put } from 'redux-saga/effects';

import { FETCH_ROUTE_LIST_ITEMS, fetchRouteListItemsAction } from '../../features/routes/actions';
import { fetchRouteListItems } from '../../api/routes';
import { Routes } from '../../store/routes/types';

export function* requestRouteList() {
  try {
    const response: { value: Routes } = yield call(fetchRouteListItems);
    yield put(fetchRouteListItemsAction.success(response));
  } catch (error) {
    yield put(fetchRouteListItemsAction.failure(error));
  }
}

export function* routeListItemWatcher() {
  yield all([takeLatest(FETCH_ROUTE_LIST_ITEMS.REQUEST, requestRouteList)]);
}
