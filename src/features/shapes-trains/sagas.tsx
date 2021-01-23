import { call, all, takeLatest, put } from 'redux-saga/effects';

import {
  FETCH_SHAPE_TRAINS_LIST_ITEMS,
  fetchShapeTrainsListItemsAction,
} from '../../features/shapes-trains/actions';
import { fetchShapeTrainsListItems } from '../../api/shapes';
import { Shapes } from '../../store/shapes/types';

export function* requestShapeTrainsListItems() {
  try {
    const response: { value: Shapes } = yield call(fetchShapeTrainsListItems);
    yield put(fetchShapeTrainsListItemsAction.success(response));
  } catch (error) {
    yield put(fetchShapeTrainsListItemsAction.failure(error));
  }
}

export function* shapeTrainsListItemsWatcher() {
  yield all([takeLatest(FETCH_SHAPE_TRAINS_LIST_ITEMS.REQUEST, requestShapeTrainsListItems)]);
}
