import * as React from 'react';
import { Drawer, withStyles, WithStyles } from '@material-ui/core';
import classnames from 'classnames';

import { NavBarMainMenuItems } from './menu-items';
import { Header } from './header';

import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  headerColor: string;
}

const NavBarComponent = (props: Props) => {
  const [sideMenuOpen, setSideMenuOpen] = React.useState(false);

  const { classes, headerColor } = props;

  return (
    <>
      <Header color={headerColor} handleToggle={() => setSideMenuOpen(!sideMenuOpen)} />
      <Drawer
        open={sideMenuOpen}
        classes={{ paper: classnames('navigator', classes.drawer) }}
        onClose={() => setSideMenuOpen(!sideMenuOpen)}
      >
        <NavBarMainMenuItems handleToggle={() => setSideMenuOpen(!sideMenuOpen)} />
      </Drawer>
    </>
  );
};

export default React.memo(withStyles(styles)(NavBarComponent));
