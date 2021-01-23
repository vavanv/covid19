import { fetchHandler } from '../../utils/api/request';
import { API_URLS } from '../../utils/api/constants';

export const fetchShapeTrainsListItems = (): Promise<void> => {
  const path = API_URLS.shapesTrains;
  return fetchHandler({
    path: path,
    method: 'GET',
  });
};
