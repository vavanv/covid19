import { createRequestTypes, asyncActionCreators } from '../../utils/api/actions';

export const FETCH_SHAPE_TRAINS_LIST_ITEMS = createRequestTypes('FETCH_SHAPE_TRAINS_LIST_ITEMS');
export const fetchShapeTrainsListItemsAction = asyncActionCreators(FETCH_SHAPE_TRAINS_LIST_ITEMS);
