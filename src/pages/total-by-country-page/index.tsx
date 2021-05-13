import * as React from 'react';
import * as R from 'ramda';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Divider, withStyles, WithStyles } from '@material-ui/core';

import { AppState } from '../../store/types';
import { ShowDataByCountry, Table, TypeSelector, Drawer, Map, LeftMenu } from '../../components';
import { CasesByCountry } from '../../store/cases/types';
import { actions } from '../../features/cases/reducer';
import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {}

export interface MenuItem {
  id: string;
  icon: any;
  route: string;
  tooltip: string;
}

const TotalByCountryComponent = (props: Props) => {
  const { classes } = props;
  const dispatch = useDispatch();

  const selectedType = useSelector((store: AppState) => store.root.casesByCountry.selectedType);
  const casesByCountry = useSelector((store: AppState) => store.root.casesByCountry.items);

  React.useEffect(() => {
    var fetchCasesByCountry = actions.fetchCasesByCountryRequest;
    dispatch(fetchCasesByCountry());
  }, [dispatch]);

  const casesByCountrySorted = (casesByCountry: CasesByCountry[]) => {
    return R.sort(R.descend(R.prop(selectedType)), casesByCountry);
  };

  return (
    <div className={classes.root}>
      <Drawer minWidth={'20px'} anchor={'left'}>
        <LeftMenu />
      </Drawer>
      <main className={classes.content}>
        <Map center={{ lat: 0, lng: 50 }} zoom={3}>
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
};

export const TotalByCountry = withStyles(styles)(TotalByCountryComponent);
