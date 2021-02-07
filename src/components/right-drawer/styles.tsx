import { createStyles, Theme } from '@material-ui/core';
import { drawerBackGround } from '../../assets/jss/portal-material';

export const styles = ({ spacing }: Theme) => {
  return createStyles({
    drawerContainer: {
      overflow: 'auto',
    },
    drawer: {
      opacity: 0.7,
      background: drawerBackGround,
    },
  });
};
