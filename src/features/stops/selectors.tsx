import * as R from 'ramda';
import { createSelector } from 'reselect';

import { AppState } from '../../store/types';
import { StopsState, Stops } from '../../store/stops/types';

export const stopListStateSelector = (state: AppState): StopsState => state.stopList;
export const state = (s: AppState): AppState => s;

export const getStopList = createSelector(
  stopListStateSelector,
  (stopList: StopsState): Stops => stopList.items,
);

export const getFilteredStopList = createSelector(
  stopListStateSelector,
  (stopList: StopsState): Stops => stopList.selectedItems,
);

export const getStopListTypeOfTrain = createSelector(
  getStopList,
  (stopList: Stops): Stops => R.filter(stop => stop.isTrain, stopList),
);
