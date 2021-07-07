import * as React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TotalByCountry as TotalByCountryPage } from '../pages/total-by-country-page';
import { DetailByCountry as DetailByCountryPage } from '../pages/detail-by-country-page';
import { DetailByVaccine as DetailByVaccinePage } from '../pages/vaccine-info-page';
import { CoverageByCountry as CoverageByCountryPage } from '../pages/coverage-info-page';
import { ROUTE_ROOT, COUNTRY, VACCINATION, VACCINE_INFORMATION } from './constants';

const Routes = () => (
  <>
    <Switch>
      <Route exact path={ROUTE_ROOT} component={TotalByCountryPage} />
      <Route path={COUNTRY} component={DetailByCountryPage} />
      <Route path={VACCINATION} component={CoverageByCountryPage} />
      <Route path={VACCINE_INFORMATION} component={DetailByVaccinePage} />
    </Switch>
  </>
);

export default withRouter(Routes);
