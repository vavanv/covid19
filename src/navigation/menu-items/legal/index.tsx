import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';

import { styles } from './styles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function LegalComponent(props: any & WithStyles<typeof styles>) {
  const { classes } = props;
  return (
    <div className={classes.author}>
      <span>Vladimir V</span>
    </div>
  );
}

export const Legal = React.memo(withStyles(styles)(LegalComponent));
