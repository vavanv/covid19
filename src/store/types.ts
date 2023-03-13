import { CasesByCountryState } from './cases/types';
import { VaccineInfoState } from './vaccine-info/types';
import { CoverageInfoState } from './coverage-info/types';

export interface AppState {
  root: {
    casesByCountry: CasesByCountryState;
    vaccineInfo: VaccineInfoState;
    coverage: CoverageInfoState;
  };
}
