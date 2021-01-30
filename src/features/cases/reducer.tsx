import * as R from 'ramda';

import { AnyAction } from '../../store/types';
import { CasesByCountryState } from '../../store/cases/types';
import { FETCH_CASES_BY_COUNTRY } from './actions';

export const initialState: CasesByCountryState = {
  items: [],
};

const reducer = (state = initialState, action: AnyAction): CasesByCountryState => {
  switch (action.type) {
    case FETCH_CASES_BY_COUNTRY.SUCCESS:
      return R.assoc('items', action.payload, state);
    case FETCH_CASES_BY_COUNTRY.FAILURE:
      return initialState;
    default:
      return state;
  }
};

export { reducer as casesByCountryReducer };
