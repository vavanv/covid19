import { combineReducers } from '@reduxjs/toolkit';

import { reducer as casesByCountryReducer } from '../features/cases/reducer';

export const rootReducer = combineReducers({
  casesByCountry: casesByCountryReducer,
});
