import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Divider } from '@material-ui/core';
import { Map } from '../../../components';

const drawerWidth = 340;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
  },
}));

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}

const MainForm = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <Map></Map>
      </main>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        <div className={classes.drawerContainer}>
          <Divider />
        </div>
      </Drawer>
    </div>
  );
};

export const MainFormComponent = MainForm;
