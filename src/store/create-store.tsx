import { applyMiddleware, createStore as createReduxStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from '../store/root-saga';
import { rootReducer, initialState } from '../store/root-reducer';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createReduxStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
