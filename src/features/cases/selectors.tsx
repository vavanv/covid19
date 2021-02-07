import { createSelector } from 'reselect';

import { AppState } from '../../store/types';
import { CasesByCountryState, Cases } from '../../store/cases/types';

export const casesByCountryStateSelector = (state: AppState): CasesByCountryState =>
  state.casesByCountry;

export const getCasesByCountry = createSelector(
  casesByCountryStateSelector,
  (cases: CasesByCountryState): Cases => cases.items,
);

export const getSelectedType = createSelector(
  casesByCountryStateSelector,
  (cases: CasesByCountryState): string => cases.selectedType,
);
