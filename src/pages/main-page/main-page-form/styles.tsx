import { createStyles } from '@material-ui/core';
import { drawerBackGround } from '../../../assets/jss/portal-material';

const color = 'rgba(255, 255, 255, 0.7)';

export const styles = createStyles({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  drawer: {
    background: drawerBackGround,
    '& *': {
      color,
    },
  },
});
