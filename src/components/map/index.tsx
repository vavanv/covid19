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
      <LeafletMap minZoom={2.9}>
        <ChangeMap center={center} zoom={zoom} />
        <TileLayer
          // url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          // url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}.png"
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        ></TileLayer>
        {children}
      </LeafletMap>
    </div>
  );
};

export const Map = React.memo(withStyles(styles)(MapComponent));
