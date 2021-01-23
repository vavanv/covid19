import * as React from 'react';
import ReactMapGL, { Marker, NavigationControl, GeolocateControl, Popup } from 'react-map-gl';
import { withStyles, WithStyles } from '@material-ui/core';
import { Stop } from '../../../store/stops/types';
import { Pin, StopInfo } from '../../../components';
import { styles } from './styles';
import { API_KEY } from './constants';

interface Props extends WithStyles<typeof styles> {
  stopList?: Stop[];
  children?: React.ReactNode;
}

const MapComponent = (props: Props & WithStyles<typeof styles>) => {
  const { classes, stopList, children } = props;

  const viewport = {
    latitude: 43.644549,
    longitude: -79.380171,
    zoom: 12.5,
    bearing: 0,
    pitch: 0,
  };

  const [selectedStopState, updateSelectedStop] = React.useState<null | Stop>(null);
  const [viewportState, updateViewport] = React.useState(viewport);

  // eslint-disable-next-line react/no-multi-comp
  const renderStopMarker = (stop: Stop, index: string | number) => {
    return (
      <Marker key={index} longitude={stop.longitude} latitude={stop.latitude}>
        <Pin stop={stop} onClick={() => updateSelectedStop(stop)} />
      </Marker>
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderPopup: any = () => {
    return (
      selectedStopState && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={selectedStopState.longitude}
          latitude={selectedStopState.latitude}
          closeOnClick={false}
          onClose={() => updateSelectedStop(null)}
          dynamicPosition={false}
        >
          <StopInfo stop={selectedStopState} />
        </Popup>
      )
    );
  };

  return (
    <ReactMapGL
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...viewportState}
      width="100%"
      height="100vh"
      mapboxApiAccessToken={API_KEY}
      onViewportChange={updateViewport}
      mapStyle="mapbox://styles/mapbox/light-v10"
      className={classes.map}
    >
      {stopList && stopList.map(renderStopMarker)}

      {selectedStopState && renderPopup()}

      <div className={classes.navigationControl}>
        <NavigationControl />
      </div>

      <GeolocateControl positionOptions={{ enableHighAccuracy: true }} />

      {children}
    </ReactMapGL>
  );
};

export const Map = React.memo(withStyles(styles)(MapComponent));
