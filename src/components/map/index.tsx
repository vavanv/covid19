import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import { MapContainer as LeafletMap, TileLayer, useMap } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';

import 'leaflet/dist/leaflet.css';
import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  children?: React.ReactNode;
  center: LatLngTuple;
  zoom: number;
}

const MapComponent = (props: Props & WithStyles<typeof styles>) => {
  const { children, classes, center, zoom } = props;

  const ChangeMap = ({ center, zoom }: any) => {
    useMap().setView(center, zoom);
    return null;
  };

  return (
    <div className={classes.map}>
      <LeafletMap minZoom={zoom} zoomControl={false}>
        <ChangeMap center={center} zoom={zoom} />
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"></TileLayer>
        {children}
      </LeafletMap>
    </div>
  );
};

export const Map = React.memo(withStyles(styles)(MapComponent));
