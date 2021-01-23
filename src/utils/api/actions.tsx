import { AsyncActions, Payload } from '../../store/types';

const REQUEST = 'REQUEST';
const START = 'START';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createRequestTypes = (base: string): any => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return [REQUEST, START, SUCCESS, FAILURE].reduce((action: any, type: string): any => {
    action[type] = `${base}_${type}`;
    return action;
  }, {});
};

export const asyncActionCreators = (asyncActions: AsyncActions) => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request: (params: any) => ({ type: asyncActions.REQUEST, params }),
  success: (payload: Payload) => ({ type: asyncActions.SUCCESS, payload }),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  failure: (error: any) => ({
    type: asyncActions.FAILURE,
    error: {
      name: error.name,
      message: error.message,
      stack: error.stack,
      status: error.status,
    },
  }),
});
