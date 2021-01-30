import * as R from 'ramda';

import { AnyAction } from '../../store/types';
import { CountriesCasesState } from '../../store/cases/types';
import { FETCH_COUNTRIES_CASES } from './actions';

export const initialState: CountriesCasesState = {
  items: [],
};

const reducer = (state = initialState, action: AnyAction): CountriesCasesState => {
  switch (action.type) {
    case FETCH_COUNTRIES_CASES.SUCCESS:
      return R.assoc('items', action.payload, state);
    case FETCH_COUNTRIES_CASES.FAILURE:
      return initialState;
    default:
      return state;
  }
};

export { reducer as countriesCasesReducer };
