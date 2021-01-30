import { createSelector } from 'reselect';

import { AppState } from '../../store/types';
import { CasesByCountryState, Cases } from '../../store/cases/types';

export const casesByCountryStateSelector = (state: AppState): CasesByCountryState =>
  state.casesByCountry;

export const getCountriesCases = createSelector(
  casesByCountryStateSelector,
  (cases: CasesByCountryState): Cases => cases.items,
);
