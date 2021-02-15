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
    form: {
      margin: '0',
      width: '200px',
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
    table: {
      marginTop: '20px',
      marginLeft: '20px',
      marginRight: '10px',
      overflow: 'scroll',
      overflowX: 'hidden',
      height: '85%',
      '& tr': {
        display: 'flex',
      },
      '& td': {
        padding: spacing(0.5),
      },
    },
    td_country: {
      width: '100%',
      align: 'left',
    },
  });
};
