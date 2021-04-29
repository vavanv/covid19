import { CasesByCountryState } from '../store/cases/types';

export interface AppState {
  rootReducer: {
    casesByCountry: CasesByCountryState;
  };
}
