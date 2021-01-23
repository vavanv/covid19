import { applyMiddleware, createStore as createReduxStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootSaga } from '../store/root-saga';
import { rootReducer } from '../store/root-reducer';
import { AppState } from '../store/types';

export const enhancers = [];

export function createStore(initialState: AppState) {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });
  const store = createReduxStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware), ...enhancers),
  );
  sagaMiddleware.run(rootSaga);

  return store;
}
