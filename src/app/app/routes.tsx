import * as React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { StopsPage } from '../../pages/stops-page';
import { TrainRoutes } from '../../pages/train-routes';
import { TrainRoutesOnLine } from '../../pages/train-routes-online';
import { ROUTE_ROOT, TRAIN_ROUTES, TRAIN_ROUTES_ONLINE } from '../../app/app/constants';

const Routes = () => (
  <>
    <Switch>
      <Route exact path={ROUTE_ROOT} component={StopsPage} />
      <Route path={TRAIN_ROUTES} component={TrainRoutes} />
      <Route path={TRAIN_ROUTES_ONLINE} component={TrainRoutesOnLine} />
    </Switch>
  </>
);

export default withRouter(Routes);
