import * as React from 'react';
import { IntlProvider } from 'react-intl';

import { getLanguage } from '../intl/locales';

interface Props {
  userCultureCode: string;
  children?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  messages?: any;
}

const IntlComponent = ({ userCultureCode, children, messages }: Props) => {
  const locale = getLanguage();
  return (
    <IntlProvider locale={locale} messages={messages} key={userCultureCode}>
      {children}
    </IntlProvider>
  );
};

export const Intl = React.memo(IntlComponent);
