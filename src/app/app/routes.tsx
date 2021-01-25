import * as React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { MainPage } from '../../pages/main-page';
import { ROUTE_ROOT } from '../../app/app/constants';

const Routes = () => (
  <>
    <Switch>
      <Route path={ROUTE_ROOT} component={MainPage} />
    </Switch>
  </>
);

export default withRouter(Routes);
