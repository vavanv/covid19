import { createRequestTypes, asyncActionCreators } from '../../utils/api/actions';

export const FETCH_TRAIN_TRIPS_LIST_ITEMS = createRequestTypes('FETCH_TRAIN_TRIPS_LIST_ITEMS');
export const fetchTrainTripsListItemsAction = asyncActionCreators(FETCH_TRAIN_TRIPS_LIST_ITEMS);
