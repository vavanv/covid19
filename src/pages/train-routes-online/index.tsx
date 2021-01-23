import * as React from 'react';

import { MainContainer } from '../../pages/main-container';
import { TrainRoutesOnLineFormContainer } from './train-routes-online-form/container';

function TrainRoutesOnLineComponent() {
  return (
    <MainContainer>
      <TrainRoutesOnLineFormContainer />
    </MainContainer>
  );
}

export const TrainRoutesOnLine = React.memo(TrainRoutesOnLineComponent);
