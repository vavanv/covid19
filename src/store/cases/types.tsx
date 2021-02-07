export const TypeOfOutput = {
  cases: 'cases',
  recovered: 'recovered',
  deaths: 'deaths',
};

export interface CasesByCountry {
  country: string;
  countryInfo: CountryInfo;
  cases: number;
  recovered: number;
  deaths: number;
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
  selectedType: string;
}
