import * as React from 'react';
import { Grid, withStyles, WithStyles } from '@material-ui/core';

import { styles } from './styles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GridContainerComponent = (props: any & WithStyles<typeof styles>) => {
  const { classes, children, ...rest } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Grid container {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
};

export const GridContainer = withStyles(styles)(GridContainerComponent);
