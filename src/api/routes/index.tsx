import { fetchHandler } from '../../utils/api/request';
import { API_URLS } from '../../utils/api/constants';

export const fetchRouteListItems = (): Promise<void> => {
  const path = API_URLS.routes;
  return fetchHandler({
    path: path,
    method: 'GET',
  });
};
