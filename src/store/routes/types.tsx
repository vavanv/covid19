export interface Route {
  key: string;
  shortName: string;
  longName: string;
  color: string;
  headSign: string;
  shapeId: string;
}

export type Routes = Route[];

export interface RoutesState {
  items: Routes;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RouteSelectedState extends Route {}
