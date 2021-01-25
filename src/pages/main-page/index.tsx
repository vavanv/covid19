import * as React from 'react';

import { MainFormContainer } from '../../pages/main-page/main-page-form/container';

function MainPageComponent() {
  return <MainFormContainer />;
}

export const MainPage = React.memo(MainPageComponent);
