export const API_BASE_URL = 'https://disease.sh/v3/covid-19/';

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
