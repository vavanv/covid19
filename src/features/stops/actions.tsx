import { Payload } from '../../store/types';

import { createRequestTypes, asyncActionCreators } from '../../utils/api/actions';

export const FETCH_STOP_LIST_ITEMS = createRequestTypes('FETCH_STOP_LIST_ITEMS');
export const fetchStopListItemsAction = asyncActionCreators(FETCH_STOP_LIST_ITEMS);

export const SHOW_STOPS = 'SHOW_STOPS';
export const showStopsAction = (payload: Payload) => ({
  type: SHOW_STOPS,
  payload,
});
