import * as React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TotalByCountryPage } from '../../pages/total-by-country-page';
import { DetailByCountryPage } from '../../pages/detail-by-country-page';
import { ROUTE_ROOT, COUNTRY } from '../../app/app/constants';

const Routes = () => (
  <>
    <Switch>
      <Route exact path={ROUTE_ROOT} component={TotalByCountryPage} />
      <Route path={COUNTRY} component={DetailByCountryPage} />
    </Switch>
  </>
);

export default withRouter(Routes);
