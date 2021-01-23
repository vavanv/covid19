import { createSelector } from 'reselect';

import { AppState } from '../../store/types';
import { UserCultureState } from '../../store/userCulture/types';

export const getUserCultureState = (state: AppState): UserCultureState => state.userCulture;

export const getUserCulture = createSelector(
  getUserCultureState,
  (userCulture: UserCultureState) => userCulture,
);

export const selectUserCultureCode = createSelector(
  getUserCulture,
  (userCulture: UserCultureState): string => userCulture.code,
);
