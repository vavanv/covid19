import * as React from 'react';
import { List, ListItem, ListItemIcon, Tooltip } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { styles } from './styles';

export interface MenuItem {
  id: string;
  icon: any;
  route: string;
  tooltip: string;
}

interface Props extends WithStyles<typeof styles> {
  items: MenuItem[];
}

const LeftMenuComponent = (props: Props & WithStyles<typeof styles>) => {
  const { classes, items } = props;

  return (
    <List className={classes.list}>
      {items.map(({ id, icon, route, tooltip }) => (
        <Link to={route} key={id}>
          <ListItem button key={id}>
            <Tooltip title={tooltip} placement="right">
              <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
            </Tooltip>
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

export const LeftMenu = React.memo(withStyles(styles)(LeftMenuComponent));
