import { Payload } from '../../store/types';

export const SHOW_POPUP = 'SHOW_POPUP';
export const showPopupAction = (payload: Payload) => ({
  type: SHOW_POPUP,
  payload,
});

export const HIDE_POPUP = 'HIDE_POPUP';
export const hidePopupAction = () => ({
  type: HIDE_POPUP,
});

export const SHOW_INFO = 'SHOW_INFO';
export const showInfoAction = (payload: Payload) => ({
  type: SHOW_INFO,
  payload,
});

export const HIDE_INFO = 'HIDE_INFO';
export const hideInfoAction = () => ({
  type: HIDE_INFO,
});
