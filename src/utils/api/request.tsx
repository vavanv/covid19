import axios from 'axios';

import { getEnvConfig } from '../../utils/api/config';
import { getUrlWithSlash, getPathWithoutSlash } from '../../utils/url/index';

import { API_CONSTANTS } from '../../utils/api/constants';
import { HttpError, TimeoutError } from './errors';

export type Credentials = 'omit' | 'same-origin' | 'include';

export interface FetchParams {
  baseUrl?: string;
  body?: string;
  credentials?: Credentials;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headers?: any;
  method?: string;
  path: string;
  timeout?: number;
}

export async function fetchHandler({
  timeout = API_CONSTANTS.timeout,
  baseUrl = getEnvConfig().baseApiUrl,
  body,
  credentials = 'omit',
  headers,
  method = 'GET',
  path,
}: FetchParams): Promise<void> {
  const defaultHeaders = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Cache-control': ['no-cache', 'no-store'],
    Pragma: 'no-cache',
    Expires: -1,
  };

  const config = {
    headers: { ...defaultHeaders, ...headers },
    body: JSON.stringify(body),
    method,
    credentials,
    timeout,
  };

  const url: string = getUrlWithSlash(baseUrl) + getPathWithoutSlash(path);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const axiosConfig: any = {
    url,
    ...config,
    data: body,
  };

  try {
    const res = await axios.request(axiosConfig);
    return res.status === 204 ? {} : res.data;
  } catch (error) {
    if (error.response) {
      throw new HttpError(error.response.status, error.response.data.error);
    } else if (error.code === 'ECONNABORTED') {
      throw new TimeoutError(error.response.statusText);
    }
    throw new Error(error.message || 'Unknown Error Occurred');
  }
}
