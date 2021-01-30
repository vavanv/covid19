import { combineReducers } from 'redux';

import { AppState } from '../store/types';
import {
  casesByCountryReducer,
  initialState as initialCasesByCountryState,
} from '../features/cases/reducer';

export const initialState: AppState = {
  casesByCountry: initialCasesByCountryState,
};

export const rootReducer = combineReducers({
  casesByCountry: casesByCountryReducer,
});
