import * as React from 'react';

import { MainFormContainer } from './main-page-form/container';

function MainPageComponent() {
  return <MainFormContainer />;
}

export const MainPage = React.memo(MainPageComponent);
