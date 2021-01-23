import { combineReducers } from 'redux';

import { AppState } from '../store/types';
import {
  userCultureReducer,
  initialState as initialUserCultureState,
} from '../features/userCulture/reducer';
import { initialUIState, uiReducer } from '../store/ui/reducer';
import { initialState as initialStopList, stopListReducer } from '../features/stops/reducer';
import {
  initialState as initialShapeTraintsList,
  shapeTrainsListReducer,
} from '../features/shapes-trains/reducer';
import { initialState as initialRouteList, routeListReducer } from '../features/routes/reducer';
import {
  initialState as initialRouteSelected,
  routeSelectedReducer,
} from '../features/route-selected/reducer';
import {
  initialState as initialTrainTripsList,
  trainTripsListReducer,
} from '../features/train-trips/reducer';

export const initialState: AppState = {
  userCulture: initialUserCultureState,
  ui: initialUIState,
  stopList: initialStopList,
  shapeTrainsList: initialShapeTraintsList,
  routeList: initialRouteList,
  routeSelected: initialRouteSelected,
  trainTripsList: initialTrainTripsList,
};

export const rootReducer = combineReducers({
  userCulture: userCultureReducer,
  ui: uiReducer,
  stopList: stopListReducer,
  shapeTrainsList: shapeTrainsListReducer,
  routeList: routeListReducer,
  routeSelected: routeSelectedReducer,
  trainTripsList: trainTripsListReducer,
});
