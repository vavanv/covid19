import { createSelector } from 'reselect';

import { AppState } from '../../store/types';
import { CountriesCasesState, Cases } from '../../store/cases/types';

export const countriesCasesStateSelector = (state: AppState): CountriesCasesState =>
  state.countriesCases;

export const getCountriesCases = createSelector(
  countriesCasesStateSelector,
  (cases: CountriesCasesState): Cases => cases.items,
);
