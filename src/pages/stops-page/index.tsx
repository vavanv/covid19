import * as React from 'react';

import { MainContainer } from '../../pages/main-container';
import { StopsFormContainer } from '../../pages/stops-page/stops-form/container';

function StopsPageComponent() {
  return (
    <MainContainer>
      <StopsFormContainer />
    </MainContainer>
  );
}

export const StopsPage = React.memo(StopsPageComponent);
