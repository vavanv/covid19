import { createSelector } from 'reselect';

import { AppState } from '../../store/types';
import { RoutesState, Routes } from '../../store/routes/types';

export const routesListStateSelector = (state: AppState): RoutesState => state.routeList;

export const getRouteList = createSelector(
  routesListStateSelector,
  (routeList: RoutesState): Routes => routeList.items,
);
