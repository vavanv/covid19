import { makeStyles } from '@material-ui/styles';
import { drawerBackGround } from '../../assets/jss/portal-material';

interface DrawerPaperStyle {
  minWidth: string;
}

export const useStyles = makeStyles({
  drawer: (props: DrawerPaperStyle) => ({
    opacity: 0.7,
    background: drawerBackGround,
    minWidth: props.minWidth,
  }),
  drawerContainer: {
    overflow: 'auto',
  },
});
