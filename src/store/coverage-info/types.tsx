export interface Item {
  date: Date;
  count: number;
}

export interface CoverageInfo {
  country: string;
  timeline: Array<Item>;
}

export type Coverage = CoverageInfo[];

export interface CoverageInfoState {
  items: CoverageInfo[];
  selectedCountry: string;
}
