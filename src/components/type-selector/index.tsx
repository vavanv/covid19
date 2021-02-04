import * as React from 'react';
import { FormControl, RadioGroup, FormControlLabel } from '@material-ui/core/';
import { withStyles, WithStyles } from '@material-ui/core';

import { CasesRadio, RecoveredRadio, DeathsRadio } from './radio-buttons';
import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  type: string;
}

const TypeSelectorComponent = (props: Props & WithStyles<typeof styles>) => {
  const { classes, type } = props;

  return (
    <FormControl component="fieldset" className={classes.form}>
      <RadioGroup row aria-label="position" name="position" defaultValue={type}>
        <FormControlLabel
          value="cases"
          control={<CasesRadio />}
          label="Cases"
          labelPlacement="top"
        />
        <FormControlLabel
          value="recovered"
          control={<RecoveredRadio />}
          label="Recovered"
          labelPlacement="top"
        />
        <FormControlLabel
          value="deaths"
          control={<DeathsRadio />}
          label="Deaths"
          labelPlacement="top"
        />
      </RadioGroup>
    </FormControl>
  );
};

export const TypeSelector = React.memo(withStyles(styles)(TypeSelectorComponent));
