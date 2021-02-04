import * as React from 'react';
import { withStyles } from '@material-ui/core';
import { Radio } from '@material-ui/core/';

import { cases_color, recovered_color, deaths_color } from '../../../assets/jss/portal-material';

export const CasesRadio = withStyles({
  root: {
    color: cases_color,
    '&$checked': {
      color: cases_color,
    },
  },
  checked: {},
})(props => <Radio {...props} size="small" />);

export const RecoveredRadio = withStyles({
  root: {
    color: recovered_color,
    '&$checked': {
      color: recovered_color,
    },
  },
  checked: {},
})(props => <Radio {...props} size="small" />);

export const DeathsRadio = withStyles({
  root: {
    color: deaths_color,
    '&$checked': {
      color: deaths_color,
    },
  },
  checked: {},
})(props => <Radio {...props} size="small" />);
