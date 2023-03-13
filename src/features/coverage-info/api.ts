import { fetchHandler } from '../../app/request';
import { API_URLS } from '../../utils/api/constants';

export const fetchCoverage = (): Promise<void> => {
  const path = API_URLS.coverage;
  return fetchHandler({
    path: path,
    method: 'GET',
  });
};
