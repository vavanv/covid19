import { createStyles } from '@material-ui/core';
import { cases_color, recovered_color, deaths_color } from '../../../assets/jss/portal-material';

export const styles = () => {
  return createStyles({
    cases: {
      color: cases_color,
      '&$checked': {
        color: cases_color,
      },
    },
    recovered: {
      color: recovered_color,
      '&$checked': {
        color: recovered_color,
      },
    },
    deaths: {
      color: deaths_color,
      '&$checked': {
        color: deaths_color,
      },
    },
    checked: {},
  });
};
