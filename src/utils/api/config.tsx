export const API_BASE_URL = 'https://gogoapiv1.azurewebsites.net';
// export const API_BASE_URL = 'http://localhost/GoGoApi';

export interface TAppConfig {
  baseApiUrl: string;
}

function getAppConfig(): TAppConfig {
  return {
    baseApiUrl: API_BASE_URL,
  };
}

export function getEnvConfig(): TAppConfig {
  return getAppConfig();
}
