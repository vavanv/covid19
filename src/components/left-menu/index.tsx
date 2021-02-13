import * as React from 'react';
import { List, ListItem, ListItemIcon, Tooltip } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {
  Public as CountryIcon,
  Colorize as SyringeIcon,
  FormatColorFill as VaccineIcon,
  Language as WorldIcon,
} from '@material-ui/icons';

import { ROUTE_ROOT, COUNTRY, VACCINATION, VACCINE_INFORMATION } from '../../app/app/constants';
import { styles } from './styles';

export interface MenuItem {
  id: string;
  icon: any;
  route: string;
  tooltip: string;
}

const items: MenuItem[] = [
  {
    id: 'World',
    icon: <WorldIcon />,
    route: ROUTE_ROOT,
    tooltip: 'Total cases by country',
  },
  {
    id: 'Country',
    icon: <CountryIcon />,
    route: COUNTRY,
    tooltip: 'Information by country',
  },
  {
    id: 'Vaccination',
    icon: <SyringeIcon />,
    route: VACCINATION,
    tooltip: 'Vaccination',
  },
  {
    id: 'Vaccine Info',
    icon: <VaccineIcon />,
    route: VACCINE_INFORMATION,
    tooltip: 'Vaccine information',
  },
];

interface Props extends WithStyles<typeof styles> {}

const LeftMenuComponent = (props: Props & WithStyles<typeof styles>) => {
  const { classes } = props;

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
