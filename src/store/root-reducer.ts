import { combineReducers } from '@reduxjs/toolkit';

import { reducer as casesByCountryReducer } from '../features/cases/reducer';
import { reducer as vaccineInfoReducer } from '../features/vaccine-info/reducer';
import { reducer as coverageInfoReducer } from '../features/coverage-info/reducer';

export const rootReducer = combineReducers({
  casesByCountry: casesByCountryReducer,
  vaccineInfo: vaccineInfoReducer,
  coverage: coverageInfoReducer,
});