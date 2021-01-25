import * as React from 'react';
import ReactMapGL, { NavigationControl } from 'react-map-gl';
import { withStyles, WithStyles } from '@material-ui/core';
import { styles } from './styles';
import { API_KEY } from './constants';

interface Props extends WithStyles<typeof styles> {
  children?: React.ReactNode;
}

const MapComponent = (props: Props & WithStyles<typeof styles>) => {
  const { classes, children } = props;

  const viewport = {
    latitude: 0.0,
    longitude: 0.0,
    zoom: 1.8,
    bearing: 0,
    pitch: 0,
  };

  const [viewportState, updateViewport] = React.useState(viewport);

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
      <div className={classes.navigationControl}>
        <NavigationControl />
      </div>
      {children}
    </ReactMapGL>
  );
};

export const Map = React.memo(withStyles(styles)(MapComponent));
