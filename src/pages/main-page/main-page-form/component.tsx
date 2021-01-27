import * as React from 'react';
import { Drawer, Divider, withStyles, WithStyles } from '@material-ui/core';
import classnames from 'classnames';
import { Map } from '../../../components';
import { styles } from './styles';
interface Props extends WithStyles<typeof styles> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}

const MainFormComponent = (props: Props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <Map></Map>
      </main>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classnames(classes.drawer) }}
        anchor="right"
      >
        <div className={classes.drawerContainer}>
          <Divider />
        </div>
      </Drawer>
    </div>
  );
};

export default withStyles(styles)(MainFormComponent);
