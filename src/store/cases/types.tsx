export interface CasesByCountry {
  country: string;
  countryInfo: CountryInfo;
  cases: number;
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
export type Cases = CasesByCountry[];

export interface CasesByCountryState {
  items: Cases;
}
