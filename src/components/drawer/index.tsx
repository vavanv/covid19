import * as React from 'react';
import { Drawer as MUDrawer } from '@material-ui/core';

import { useStyles } from './styles';

interface Props {
  children?: React.ReactNode;
  minWidth: string;
  anchor: 'left' | 'right';
}

const DrawerComponent = (props: Props) => {
  const { children, minWidth, anchor } = props;

  const style = useStyles({
    minWidth: minWidth,
  });

  return (
    <MUDrawer variant="permanent" classes={{ paper: style.drawer }} anchor={anchor}>
      <div className={style.drawerContainer}>{children}</div>
    </MUDrawer>
  );
};

export const Drawer = React.memo(DrawerComponent);
