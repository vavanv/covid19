export const API_BASE_URL = 'https://disease.sh/v3/covid-19/';

export interface AppConfig {
  baseApiUrl: string;
}

export const getEnvConfig = (): AppConfig => {
  return {
    baseApiUrl: API_BASE_URL,
  };
};
