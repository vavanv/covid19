import * as R from 'ramda';

import { AnyAction } from '../../store/types';
import { RoutesState } from '../../store/routes/types';
import { FETCH_ROUTE_LIST_ITEMS } from './actions';

export const initialState: RoutesState = {
  items: [],
};

const reducer = (state = initialState, action: AnyAction): RoutesState => {
  switch (action.type) {
    case FETCH_ROUTE_LIST_ITEMS.SUCCESS:
      return R.assoc('items', action.payload, state);
    case FETCH_ROUTE_LIST_ITEMS.FAILURE:
      return initialState;
    default:
      return state;
  }
};

export { reducer as routeListReducer };
