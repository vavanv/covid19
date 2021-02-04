import * as React from 'react';
import { withStyles } from '@material-ui/core';
import { Radio } from '@material-ui/core/';

import { cases_color, recovered_color, deaths_color } from '../../../assets/jss/portal-material';

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  var a = event.target.value;
};

interface Props {
  type: string;
}

export const CasesRadio = withStyles({
  root: {
    color: cases_color,
    '&$checked': {
      color: cases_color,
    },
  },
  checked: {},
})(props => <Radio {...props} size="small" onChange={handleChange} />);

export const RecoveredRadio = withStyles({
  root: {
    color: recovered_color,
    '&$checked': {
      color: recovered_color,
    },
  },
  checked: {},
})(props => <Radio {...props} size="small" onChange={handleChange} />);

export const DeathsRadio = withStyles({
  root: {
    color: deaths_color,
    '&$checked': {
      color: deaths_color,
    },
  },
  checked: {},
})(props => <Radio {...props} size="small" onChange={handleChange} />);
