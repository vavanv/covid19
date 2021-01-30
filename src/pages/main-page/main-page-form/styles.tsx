import { createStyles, Theme } from '@material-ui/core';
import { drawerBackGround } from '../../../assets/jss/portal-material';

export const styles = ({ palette }: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
    },
    title: {
      flexGrow: 1,
      margin: '20px',
    },
    content: {
      flexGrow: 1,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    drawer: {
      opacity: 0.5,
      background: drawerBackGround,
    },
  });
};
