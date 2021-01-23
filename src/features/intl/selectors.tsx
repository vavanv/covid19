import { createSelector } from 'reselect';

import { getLocaleMessages } from '../../intl/locales';
import { selectUserCultureCode } from '../../features/userCulture/selectors';

export const selectMessages = createSelector(selectUserCultureCode, getLocaleMessages);
