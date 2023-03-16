import { combineReducers } from '@reduxjs/toolkit';

import {
  reducer as casesByCountryReducer,
  initialState as casesByCountryInitialState,
} from '../features/cases/reducer';
import {
  reducer as vaccineInfoReducer,
  initialState as vaccineInfoInitialState,
} from '../features/vaccine-info/reducer';
import {
  reducer as coverageInfoReducer,
  initialState as coverageInfoInitialState,
} from '../features/coverage-info/reducer';
import { AppState } from './app-state';

export const rootReducer = combineReducers({
  casesByCountry: casesByCountryReducer,
  vaccineInfo: vaccineInfoReducer,
  coverage: coverageInfoReducer,
});

export const initialState: AppState = {
  casesByCountry: casesByCountryInitialState,
  vaccineInfo: vaccineInfoInitialState,
  coverage: coverageInfoInitialState,
};
