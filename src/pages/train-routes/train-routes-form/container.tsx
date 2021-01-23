import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { AppState } from '../../../store/types';
import { Stop } from '../../../store/stops/types';
import { Route } from '../../../store/routes/types';
import { Shape } from '../../../store/shapes/types';
import { getStopListTypeOfTrain } from '../../../features/stops/selectors';
import { getRouteList } from '../../../features/routes/selectors';
import { getShapeTrainsList } from '../../../features/shapes-trains/selectors';
import { getRouteSelected } from '../../../features/route-selected/selectors';
import {
  fetchStopListItemsAction,
  showStopsAction as showStops,
} from '../../../features/stops/actions';
import { fetchRouteListItemsAction } from '../../../features/routes/actions';
import { fetchShapeTrainsListItemsAction } from '../../../features/shapes-trains/actions';

import { TrainRoutesFormComponent } from './component';

const mapStateToProps = createStructuredSelector<
  AppState,
  {
    stopList: Stop[];
    routeList: Route[];
    shapeTrainsList: Shape[];
    routeSelected: Route;
  }
>({
  stopList: getStopListTypeOfTrain,
  routeList: getRouteList,
  shapeTrainsList: getShapeTrainsList,
  routeSelected: getRouteSelected,
});

const mapDispatchToProps = {
  fetchStopList: fetchStopListItemsAction.request,
  fetchRouteList: fetchRouteListItemsAction.request,
  fetchShapeTrainsList: fetchShapeTrainsListItemsAction.request,
  showStops,
};

export const TrainRoutesFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrainRoutesFormComponent);
