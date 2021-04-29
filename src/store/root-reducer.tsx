import { combineReducers } from '@reduxjs/toolkit';

// import { AppState } from '../store/types';
import { reducer as casesByCountryReducer } from '../features/cases/reducer';
// import {
//   casesByCountryReducer,
//   initialState as initialCasesByCountryState,
// } from '../features/cases/reducer';

// export const initialState: AppState = {
//   casesByCountry: initialCasesByCountryState,
// };

export const rootReducer = combineReducers({
  casesByCountry: casesByCountryReducer,
});
