import * as R from 'ramda';

import { AnyAction } from '../../store/types';
import { StopsState } from '../../store/stops/types';
import { SHOW_STOPS } from '../../features/stops/actions';

import { FETCH_STOP_LIST_ITEMS } from './actions';
import { actions } from './constants';

export const initialState: StopsState = {
  items: [],
  selectedItems: [],
};

const reducer = (state = initialState, action: AnyAction): StopsState => {
  switch (action.type) {
    case FETCH_STOP_LIST_ITEMS.SUCCESS:
      return R.assoc('items', action.payload, state);
    case FETCH_STOP_LIST_ITEMS.FAILURE:
      return initialState;
    case SHOW_STOPS: {
      const payload = action.payload;
      let filteredList;
      let selectedList;
      switch (payload) {
        case actions.ALL:
          filteredList = state.items.filter(f => f.isTrain || f.isBus);
          selectedList = R.assoc('selectedItems', filteredList, state);
          break;
        case actions.BUSES:
          filteredList = state.items.filter(f => f.isBus);
          selectedList = R.assoc('selectedItems', filteredList, state);
          break;
        case actions.TRAINS:
          filteredList = state.items.filter(f => f.isTrain);
          selectedList = R.assoc('selectedItems', filteredList, state);
          break;
        default:
          filteredList = null;
          selectedList = R.assoc('selectedItems', filteredList, state);
          break;
      }
      return selectedList;
    }
    default:
      return state;
  }
};

export { reducer as stopListReducer };
