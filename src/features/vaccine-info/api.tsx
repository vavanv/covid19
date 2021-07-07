import { fetchHandler } from '../../app/request';
import { API_URLS } from '../../utils/api/constants';

export const fetchVaccineInfo = (): Promise<void> => {
  const path = API_URLS.vaccine_info;
  return fetchHandler({
    path: path,
    method: 'GET',
  });
};
