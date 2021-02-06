import * as React from 'react';
import { FormControl, RadioGroup, FormControlLabel } from '@material-ui/core/';
import { withStyles, WithStyles } from '@material-ui/core';

import { TypeOfOutput } from '../../utils/common/constants';
import { cases_color, recovered_color, deaths_color } from '../../assets/jss/portal-material';
import { RadioButton } from './radio-buttons';
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
          control={<RadioButton type={TypeOfOutput.cases} color={cases_color} />}
          label="Cases"
          labelPlacement="top"
        />
        <FormControlLabel
          control={<RadioButton type={TypeOfOutput.recovered} color={recovered_color} />}
          label="Recovered"
          labelPlacement="top"
        />
        <FormControlLabel
          control={<RadioButton type={TypeOfOutput.deaths} color={deaths_color} />}
          label="Deaths"
          labelPlacement="top"
        />
      </RadioGroup>
    </FormControl>
  );
};

export const TypeSelector = React.memo(withStyles(styles)(TypeSelectorComponent));
