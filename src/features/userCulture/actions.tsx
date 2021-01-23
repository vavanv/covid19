import { createRequestTypes, asyncActionCreators } from '../../utils/api/actions';

export const LOGIN = createRequestTypes('LOGIN');
export const loginAction = asyncActionCreators(LOGIN);

export const LOGOUT = 'LOGOUT';
export const logoutAction = () => ({
  type: LOGOUT,
});

export const FETCH_USER = createRequestTypes('FETCH_USER');
export const fetchUserAction = asyncActionCreators(FETCH_USER);
