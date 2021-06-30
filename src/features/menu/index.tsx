import * as React from 'react';
import {
  Public as CountryIcon,
  Colorize as SyringeIcon,
  FormatColorFill as VaccineIcon,
  Language as WorldIcon,
} from '@material-ui/icons';

import { ROUTE_ROOT, COUNTRY, VACCINATION, VACCINE_INFORMATION } from './../../app/app/constants';

import { Drawer, MenuItems } from './../../components';
import { MenuItem } from '../../components/menu-items/index';

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

const MenuComponent = () => {
  return (
    <Drawer minWidth={'20px'} anchor={'left'}>
      <MenuItems items={items} />
    </Drawer>
  );
};

export const Menu = React.memo(MenuComponent);
