import { CasesByCountryState } from '../store/cases/types';
import { VaccineInfoState } from '../store/vaccine-info/types';
import { CoverageInfoState } from '../store/coverage/types';

export interface AppState {
  root: {
    casesByCountry: CasesByCountryState;
    vaccineInfo: VaccineInfoState;
    coverage: CoverageInfoState;
  };
}
