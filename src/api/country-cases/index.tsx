import { fetchHandler } from '../../utils/api/request';
import { API_URLS } from '../../utils/api/constants';

export const fetchCountriesCases = (): Promise<void> => {
  const path = API_URLS.countries_cases;
  return fetchHandler({
    path: path,
    method: 'GET',
  });
};
