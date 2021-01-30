import { InformationEvent } from 'http';

export interface CountryCases {
  country: string;
  countryInfo: CountryInfo;
  case: number;
  todayCases: number;
}

export interface Info {
  iso2: string;
  iso3: string;
  lat: number;
  long: number;
  flag: string;
}

export type CountryInfo = Info;
export type Cases = CountryCases[];

export interface CountriesCasesState {
  items: Cases;
}
