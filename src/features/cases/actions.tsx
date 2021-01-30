import { createRequestTypes, asyncActionCreators } from '../../utils/api/actions';

export const FETCH_COUNTRIES_CASES = createRequestTypes('FETCH_COUNTRIES_CASES');
export const fetchCountriesCasesAction = asyncActionCreators(FETCH_COUNTRIES_CASES);
