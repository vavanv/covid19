import { getDefaultMiddleware, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from '../store/root-saga';
import { rootReducer } from '../store/root-reducer';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const reducer = {
  root: rootReducer,
};

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), ...middleware],
  preloadedState: {},
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export default store;
