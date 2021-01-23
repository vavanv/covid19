import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectMessages } from '../features/intl/selectors';
import { selectUserCultureCode } from '../features/userCulture/selectors';
import { Intl } from '../intl/component';
import { AppState } from '../store/types';

export const mapStateToProps = createStructuredSelector<
  AppState,
  {
    userCultureCode: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    messages: any;
  }
>({
  userCultureCode: selectUserCultureCode,
  messages: selectMessages,
});

export const IntlContainer = connect(mapStateToProps)(Intl);
