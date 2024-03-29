import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import { Menu } from './../features/menu';
import { Map, Drawer } from '../components';

import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  mapChildren?: React.ReactNode;
  drawerChildren?: React.ReactNode;
}

const MainContainerComponent = (props: Props) => {
  const { classes, mapChildren, drawerChildren } = props;
  return (
    <div className={classes.root}>
      <Menu />
      <div className={classes.content}>
        <Map center={{ lat: 0, lng: 50 }} zoom={2.9}>
          {mapChildren}
        </Map>
      </div>
      <Drawer minWidth={'400px'} anchor={'right'}>
        {drawerChildren}
      </Drawer>
    </div>
  );
};

export const MainContainer = React.memo(withStyles(styles)(MainContainerComponent));
