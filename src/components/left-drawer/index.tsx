import * as React from 'react';
import { Drawer, withStyles, WithStyles } from '@material-ui/core';

import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  children?: React.ReactNode;
}

const LeftDrawerComponent = (props: Props & WithStyles<typeof styles>) => {
  const { children, classes } = props;

  return (
    <Drawer
      variant="permanent"
      classes={{ paper: classes.drawer }}
      anchor="left"
      PaperProps={{
        style: {
          overflowX: 'hidden',
          marginTop: 0,
          width: '50px',
          paddingBottom: 0,
          height: '100%',
        },
      }}
    >
      <div className={classes.drawerContainer}>{children}</div>
    </Drawer>
  );
};

export const LeftDrawer = React.memo(withStyles(styles)(LeftDrawerComponent));
