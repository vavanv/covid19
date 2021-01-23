import { UserCultureState } from '../store/userCulture/types';
import { UIState } from '../store/ui/types';
import { StopsState } from '../store/stops/types';
import { ShapesTrainsState } from '../store/shapes/types';
import { RoutesState, RouteSelectedState } from '../store/routes/types';
import { TrainTripsState } from '../store/train-trips/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Payload = any;

export interface AppState {
  userCulture: UserCultureState;
  ui: UIState;
  stopList: StopsState;
  shapeTrainsList: ShapesTrainsState;
  routeList: RoutesState;
  routeSelected: RouteSelectedState;
  trainTripsList: TrainTripsState;
}

export interface AnyAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: any;
  payload?: Payload;
  error?: string;
}

export interface RequestAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}

export interface SuccessAction {
  type: string;
  payload: Payload;
}

export interface FailureAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
}

export interface AsyncActions {
  REQUEST: string;
  SUCCESS: string;
  FAILURE: string;
}
