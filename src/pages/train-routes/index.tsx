import * as React from 'react';

import { MainContainer } from '../../pages/main-container';
import { TrainRoutesFormContainer } from './train-routes-form/container';

function TrainRoutesComponent() {
  return (
    <MainContainer>
      <TrainRoutesFormContainer />
    </MainContainer>
  );
}

export const TrainRoutes = React.memo(TrainRoutesComponent);
