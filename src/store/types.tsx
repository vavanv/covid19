import { CasesByCountryState } from '../store/cases/types';

export interface AppState {
  root: {
    casesByCountry: CasesByCountryState;
  };
}
