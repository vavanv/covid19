import { createStyles, Theme } from '@material-ui/core';
import { defaultLabelFont } from '../../assets/jss/portal-material';

export const styles = ({ palette, spacing }: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
    },
    marginTop: {
      marginTop: '16px',
    },
    title: {
      flexGrow: 1,
      margin: '20px',
    },
    input: {
      '&,&::placeholder': {
        fontSize: '14px',
        textAlign: 'left',
      },
    },
    inputSelect: {
      fontStyle: 'italic',
      fontWeight: 300,
    },
    labelRoot: {
      ...defaultLabelFont,
    },
    margin: {
      margin: spacing(1),
    },
  });
};
