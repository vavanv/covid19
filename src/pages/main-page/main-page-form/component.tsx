import * as React from 'react';
import * as R from 'ramda';
import {
  List,
  ListItem,
  ListItemIcon,
  Typography,
  Divider,
  Tooltip,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import {
  Public as WorldIcon,
  Colorize as SyringeIcon,
  FormatColorFill as VaccineIcon,
} from '@material-ui/icons';
import { ROUTE_ROOT, VACCINATION, VACCINE_INFORMATION } from '../../../app/app/constants';
import { Map, ShowDataByCountry, Drawer, Table, TypeSelector } from '../../../components';
import { CasesByCountry } from '../../../store/cases/types';

import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  fetchCasesByCountry: (params: any) => void;
  casesByCountry: CasesByCountry[];
  selectedType: string;
}
export interface MenuItem {
  id: string;
  icon: any;
  route: string;
  tooltip: string;
}

function MainFormComponent(props: Props) {
  const { classes, casesByCountry, selectedType } = props;

  React.useEffect(() => {
    props.fetchCasesByCountry(null);
    // eslint-disable-next-line
  }, []);

  const casesByCountrySorted = (casesByCountry: CasesByCountry[]) => {
    return R.sort(R.descend(R.prop(selectedType)), casesByCountry);
  };

  const items: MenuItem[] = [
    {
      id: 'World',
      icon: <WorldIcon />,
      route: ROUTE_ROOT,
      tooltip: 'Total cases by country',
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

  const meneItems = items.map(({ id, icon, route, tooltip }) => {
    return (
      <Link to={route} key={id}>
        <ListItem button key={id}>
          <Tooltip title={tooltip} placement="right">
            <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
          </Tooltip>
        </ListItem>
      </Link>
    );
  });

  return (
    <div className={classes.root}>
      <Drawer minWidth={'20px'} anchor={'left'}>
        <List className={classes.list}>{meneItems}</List>
      </Drawer>
      <main className={classes.content}>
        <Map center={[0, 50]} zoom={2.9}>
          {casesByCountry.map(country => (
            <ShowDataByCountry country={country} selectedType={selectedType}></ShowDataByCountry>
          ))}
        </Map>
      </main>
      <Drawer minWidth={'180px'} anchor={'right'}>
        <Typography variant="h6" className={classes.title}>
          <div>Total By Country</div>
        </Typography>
        <TypeSelector type={selectedType} />
        <Divider />
        <Table dataset={casesByCountrySorted(casesByCountry)} type={selectedType}></Table>
      </Drawer>
    </div>
  );
}

export default withStyles(styles)(MainFormComponent);
