import { createStyles, Theme } from '@material-ui/core';
import { defaultLabelFont } from '../../../assets/jss/portal-material';

export const styles = ({ spacing }: Theme) => {
  return createStyles({
    drawer: {
      padding: spacing(2),
      flexShrink: 0,
    },
    drawerPaper: {},
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    inputSelect: {
      fontStyle: 'italic',
      fontWeight: 300,
    },
    marginTop: {
      marginTop: '16px',
    },
    labelRoot: {
      ...defaultLabelFont,
    },
    margin: {
      margin: spacing(1),
    },
    form: {
      margin: '0',
    },
    input: {
      '&,&::placeholder': {
        fontSize: '14px',
        textAlign: 'left',
      },
    },
  });
};
