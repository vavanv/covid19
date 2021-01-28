import * as React from 'react';
import { Drawer, Divider, withStyles, WithStyles } from '@material-ui/core';
import { Map } from '../../../components';
import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {}

const MainFormComponent = (props: Props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <Map></Map>
      </main>
      <Drawer variant="permanent" classes={{ paper: classes.drawer }} anchor="right">
        <div className={classes.drawerContainer}>
          <Divider />
        </div>
      </Drawer>
    </div>
  );
};

export default withStyles(styles)(MainFormComponent);
