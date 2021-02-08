import * as React from 'react';
import * as R from 'ramda';
import { Typography, Divider, withStyles, WithStyles } from '@material-ui/core';
import { Map, ShowDataByCountry, Drawer, Table, TypeSelector } from '../../../components';
import { CasesByCountry } from '../../../store/cases/types';

import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  fetchCasesByCountry: (params: any) => void;
  casesByCountry: CasesByCountry[];
  selectedType: string;
}

const MainFormComponent = (props: Props) => {
  const { classes, casesByCountry, selectedType } = props;

  React.useEffect(() => {
    props.fetchCasesByCountry(null);
    // eslint-disable-next-line
  }, []);

  const casesByCountrySorted = (casesByCountry: CasesByCountry[]) => {
    return R.sort(R.descend(R.prop(selectedType)), casesByCountry);
  };

  return (
    <div className={classes.root}>
      <Drawer minWidth={'50px'} anchor={'left'}>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <Map center={[0, 50]} zoom={2.9}>
          {casesByCountry.map(country => (
            <ShowDataByCountry country={country} selectedType={selectedType}></ShowDataByCountry>
          ))}
        </Map>
      </main>
      <Drawer minWidth={'200px'} anchor={'right'}>
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

export default withStyles(styles)(MainFormComponent);
