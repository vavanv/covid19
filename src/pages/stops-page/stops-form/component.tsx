import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Stop } from '../../../store/stops/types';
import { Map } from '../../../components';
import { Payload } from '../../../store/types';
import { actions } from '../../../features/stops/constants';
import { showStopsAction as showStops } from '../../../features/stops/actions';
import { ControlPanel } from '../control-panel';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetchStopList: (params: any) => void;
  stopList: Stop[];
  showStops: ({ type }: Payload) => void;
}

const StopsForm = (props: Props) => {
  const { stopList } = props;
  const dispatch = useDispatch();

  React.useEffect(() => {
    props.fetchStopList(null);
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    dispatch(showStops(actions.NONE));
    // eslint-disable-next-line
  }, []);

  return (
    <Map stopList={stopList}>
      <ControlPanel />
    </Map>
  );
};

export const StopsFormComponent = StopsForm;
