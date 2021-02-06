import * as R from 'ramda';
import { TypeOfOutput } from './/../../utils/common/constants';
import { AnyAction } from '../../store/types';
import { CasesByCountryState } from '../../store/cases/types';
import { FETCH_CASES_BY_COUNTRY, CHANGE_TYPE_BY_COUNTRY } from './actions';

export const initialState: CasesByCountryState = {
  items: [],
  selectedType: TypeOfOutput.cases,
};

const reducer = (state = initialState, action: AnyAction): CasesByCountryState => {
  switch (action.type) {
    case FETCH_CASES_BY_COUNTRY.SUCCESS:
      return R.assoc('items', action.payload, state);
    case FETCH_CASES_BY_COUNTRY.FAILURE:
      return initialState;
    case CHANGE_TYPE_BY_COUNTRY:
      return R.assoc('selectedType', action.payload, state);
    default:
      return state;
  }
};

export { reducer as casesByCountryReducer };
