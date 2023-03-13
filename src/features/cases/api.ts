import { fetchHandler } from '../../app/request';
import { API_URLS } from '../../utils/api/constants';

export const fetchCasesByCountry = (): Promise<void> => {
  const path = API_URLS.cases_by_country;
  return fetchHandler({
    path: path,
    method: 'GET',
  });
};
