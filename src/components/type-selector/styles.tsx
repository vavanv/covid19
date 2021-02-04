import { createStyles } from '@material-ui/core';
import { cases_color, recovered_color, deaths_color } from '../../assets/jss/portal-material';

export const styles = () => {
  return createStyles({
    form: {
      //   marginTop: '20px',
      marginLeft: '20px',
      //   overflow: 'scroll',
      //   overflowX: 'hidden',
      //   height: '90%',
      //   '& tr': {
      //     display: 'flex',
      //     justifyContent: 'space-between',
      //   },
      //   '& td': {
      //     padding: spacing(0.5),
      //   },
    },
    cases_label: {
      color: cases_color,
      '&$checked': {
        color: cases_color,
      },
    },
    recovered_label: {
      color: recovered_color,
      '&$checked': {
        color: recovered_color,
      },
    },
    deaths_label: {
      color: deaths_color,
      '&$checked': {
        color: deaths_color,
      },
    },
  });
};
