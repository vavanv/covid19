import * as React from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core/';
import { withStyles, WithStyles } from '@material-ui/core';

import { cases_color, recovered_color, deaths_color } from '../../assets/jss/portal-material';
import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  type: string;
}

const CasesRadio = withStyles({
  root: {
    color: cases_color,
    '&$checked': {
      color: cases_color,
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} size="small" />);

const RecoveredRadio = withStyles({
  root: {
    color: recovered_color,
    '&$checked': {
      color: recovered_color,
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} size="small" />);

const DeathsRadio = withStyles({
  root: {
    color: deaths_color,
    '&$checked': {
      color: deaths_color,
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} size="small" />);

const TypeSelectorComponent = (props: Props & WithStyles<typeof styles>) => {
  const { classes, type } = props;

  return (
    <FormControl component="fieldset" className={classes.form}>
      <RadioGroup row aria-label="position" name="position" defaultValue={type}>
        <FormControlLabel
          value="Cases"
          control={<CasesRadio />}
          label="Cases"
          labelPlacement="top"
        />
        <FormControlLabel
          value="Recovered"
          control={<RecoveredRadio />}
          label="Recovered"
          labelPlacement="top"
        />
        <FormControlLabel
          value="Deaths"
          control={<DeathsRadio />}
          label="Deaths"
          labelPlacement="top"
        />
      </RadioGroup>
    </FormControl>
  );
};

export const TypeSelector = React.memo(withStyles(styles)(TypeSelectorComponent));
