import * as R from 'ramda';

import { AnyAction } from '../../store/types';
import { ShapesTrainsState } from '../../store/shapes/types';
import { FETCH_SHAPE_TRAINS_LIST_ITEMS } from './actions';

export const initialState: ShapesTrainsState = {
  items: [],
};

const reducer = (state = initialState, action: AnyAction): ShapesTrainsState => {
  switch (action.type) {
    case FETCH_SHAPE_TRAINS_LIST_ITEMS.SUCCESS:
      return R.assoc('items', action.payload, state);
    case FETCH_SHAPE_TRAINS_LIST_ITEMS.FAILURE:
      return initialState;
    default:
      return state;
  }
};

export { reducer as shapeTrainsListReducer };
