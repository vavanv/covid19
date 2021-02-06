import { createRequestTypes, asyncActionCreators } from '../../utils/api/actions';
import { Payload } from '../../store/types';

export const FETCH_CASES_BY_COUNTRY = createRequestTypes('FETCH_CASES_BY_COUNTRY');
export const fetchCasesByCountryAction = asyncActionCreators(FETCH_CASES_BY_COUNTRY);

export const CHANGE_TYPE_BY_COUNTRY = 'CHANGE_TYPE_BY_COUNTRY';
export const changeTyByCountryAction = (payload: Payload) => ({
  type: CHANGE_TYPE_BY_COUNTRY,
  payload,
});
