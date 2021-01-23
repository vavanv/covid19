import { createSelector } from 'reselect';

import { AppState } from '../../store/types';
import { RouteSelectedState } from '../../store/routes/types';

export const routeSelectedStateSelector = (state: AppState): RouteSelectedState =>
  state.routeSelected;

export const getRouteSelected = createSelector(
  routeSelectedStateSelector,
  (routeSelected: RouteSelectedState) => routeSelected,
);
