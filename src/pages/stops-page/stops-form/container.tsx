import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { AppState } from '../../../store/types';
import { Stop } from '../../../store/stops/types';
import { getFilteredStopList } from '../../../features/stops/selectors';
import {
  fetchStopListItemsAction,
  showStopsAction as showStops,
} from '../../../features/stops/actions';
import { StopsFormComponent } from './component';

const mapStateToProps = createStructuredSelector<
  AppState,
  {
    stopList: Stop[];
  }
>({
  stopList: getFilteredStopList,
});

const mapDispatchToProps = {
  fetchStopList: fetchStopListItemsAction.request,
  showStops,
};

export const StopsFormContainer = connect(mapStateToProps, mapDispatchToProps)(StopsFormComponent);
