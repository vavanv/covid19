import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import { NavBar } from '../../navigation';

import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  children?: React.ReactNode;
}

const MainContainerComponent = (props: Props) => {
  return (
    <>
      <NavBar headerColor={'primary'} />
      <div>{props.children}</div>
    </>
  );
};

export const MainContainer = React.memo(withStyles(styles)(MainContainerComponent));
