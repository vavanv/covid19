import * as R from 'ramda';

import { AnyAction } from '../../store/types';
import { RouteSelectedState } from '../../store/routes/types';
import { SELECT_ROUTE } from './actions';

export const initialState: RouteSelectedState = {
  key: '',
  shortName: '',
  longName: '',
  color: '',
  headSign: '',
  shapeId: '',
};

const reducer = (state = initialState, action: AnyAction): RouteSelectedState => {
  switch (action.type) {
    case SELECT_ROUTE:
      return R.mergeAll([state, action.payload]);
    default:
      return state;
  }
};

export { reducer as routeSelectedReducer };
