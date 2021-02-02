import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import 'leaflet/dist/leaflet.css';
import { styles } from './styles';
import { MapContainer as LeafletMap, TileLayer, useMap } from 'react-leaflet';

interface Props extends WithStyles<typeof styles> {
  children?: React.ReactNode;
}

function ChangeMap({ center, zoom }: any) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const MapComponent = (props: Props & WithStyles<typeof styles>) => {
  const { classes, children } = props;

  return (
    <div className={classes.map}>
      <LeafletMap>
        <ChangeMap center={[0, 0]} zoom={2.9} />
        <TileLayer
          // url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          // url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        ></TileLayer>
      </LeafletMap>
    </div>
  );
};

export const Map = React.memo(withStyles(styles)(MapComponent));
