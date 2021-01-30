import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { AppState } from '../../../store/types';
import { CountryCases } from '../../../store/cases/types';
import { getCountriesCases } from '../../../features/cases/selectors';
import { fetchCountriesCasesAction } from '../../../features/cases/actions';

import MainFormComponent from './component';

const mapStateToProps = createStructuredSelector<
  AppState,
  {
    countriesCases: CountryCases[];
  }
>({
  countriesCases: getCountriesCases,
});

const mapDispatchToProps = {
  fetchCountriesCases: fetchCountriesCasesAction.request,
};

export const MainFormContainer = connect(mapStateToProps, mapDispatchToProps)(MainFormComponent);
