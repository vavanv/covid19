import { combineReducers } from 'redux';

import { AppState } from '../store/types';
import {
  countriesCasesReducer,
  initialState as initialCountriesCasesState,
} from '../features/cases/reducer';

export const initialState: AppState = {
  countriesCases: initialCountriesCasesState,
};

export const rootReducer = combineReducers({
  countriesCases: countriesCasesReducer,
});
