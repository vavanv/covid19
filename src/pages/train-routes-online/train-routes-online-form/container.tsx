import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { AppState } from '../../../store/types';
import { Stop } from '../../../store/stops/types';
import { Route } from '../../../store/routes/types';
import { Shape } from '../../../store/shapes/types';
import { TrainTrip } from '../../../store/train-trips/types';
import { getStopListTypeOfTrain } from '../../../features/stops/selectors';
import { getRouteList } from '../../../features/routes/selectors';
import { getShapeTrainsList } from '../../../features/shapes-trains/selectors';
import { getTrainTripsList } from '../../../features/train-trips/selectors';
import {
  fetchStopListItemsAction,
  showStopsAction as showStops,
} from '../../../features/stops/actions';
import { fetchRouteListItemsAction } from '../../../features/routes/actions';
import { fetchShapeTrainsListItemsAction } from '../../../features/shapes-trains/actions';
import { fetchTrainTripsListItemsAction } from '../../../features/train-trips/actions';

import { TrainRoutesOnLineFormComponent } from './component';

const mapStateToProps = createStructuredSelector<
  AppState,
  {
    stopList: Stop[];
    routeList: Route[];
    shapeTrainsList: Shape[];
    trainTripsList: TrainTrip[];
  }
>({
  stopList: getStopListTypeOfTrain,
  routeList: getRouteList,
  shapeTrainsList: getShapeTrainsList,
  trainTripsList: getTrainTripsList,
});

const mapDispatchToProps = {
  fetchStopList: fetchStopListItemsAction.request,
  fetchRouteList: fetchRouteListItemsAction.request,
  fetchShapeTrainsList: fetchShapeTrainsListItemsAction.request,
  fetchTrainTripsList: fetchTrainTripsListItemsAction.request,
  showStops,
};

export const TrainRoutesOnLineFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrainRoutesOnLineFormComponent);
