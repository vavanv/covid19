import { createSelector } from 'reselect';

import { AppState } from '../../store/types';
import { ShapesTrainsState, Shapes } from '../../store/shapes/types';

export const shapesTrainsListStateSelector = (state: AppState): ShapesTrainsState =>
  state.shapeTrainsList;

export const getShapeTrainsList = createSelector(
  shapesTrainsListStateSelector,
  (shapeTrainsList: ShapesTrainsState): Shapes => shapeTrainsList.items,
);
