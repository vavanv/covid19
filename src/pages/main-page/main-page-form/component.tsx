import * as React from 'react';
import * as R from 'ramda';
import { Drawer, Divider, Typography, withStyles, WithStyles } from '@material-ui/core';
import { Map, Table, ShowDataByCountry, TypeSelector } from '../../../components';
import { CasesByCountry } from '../../../store/cases/types';
import { TypeOfOutput } from '../../../utils/common/constants';

import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  fetchCasesByCountry: (params: any) => void;
  casesByCountry: CasesByCountry[];
}

const MainFormComponent = (props: Props) => {
  const { classes, casesByCountry } = props;

  React.useEffect(() => {
    props.fetchCasesByCountry(null);
    // eslint-disable-next-line
  }, []);

  const casesByCountrySorted = (casesByCountry: CasesByCountry[]) => {
    return R.sort(R.descend(R.prop('cases')), casesByCountry);
  };

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <Map center={[0, 0]} zoom={2.9}>
          {casesByCountry.map(country => (
            <ShowDataByCountry country={country}></ShowDataByCountry>
          ))}
        </Map>
      </main>
      <Drawer
        variant="permanent"
        classes={{ paper: classes.drawer }}
        anchor="right"
        PaperProps={{
          style: {
            overflowX: 'hidden',
            marginTop: 0,
            width: '200px',
            paddingBottom: 0,
            height: '100%',
          },
        }}
      >
        <div className={classes.drawerContainer}>
          <Typography variant="h6" className={classes.title}>
            <div>Total By Country</div>
          </Typography>
          <TypeSelector type={TypeOfOutput.recovered} />
          <Divider />
          <Table
            dataset={casesByCountrySorted(casesByCountry)}
            type={TypeOfOutput.recovered}
          ></Table>
        </div>
      </Drawer>
    </div>
  );
};

export default withStyles(styles)(MainFormComponent);
