import { createRequestTypes, asyncActionCreators } from '../../utils/api/actions';

export const FETCH_CASES_BY_COUNTRY = createRequestTypes('FETCH_CASES_BY_COUNTRY');
export const fetchCasesByCountryAction = asyncActionCreators(FETCH_CASES_BY_COUNTRY);
