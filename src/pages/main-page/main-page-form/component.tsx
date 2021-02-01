import * as React from 'react';
import * as R from 'ramda';
import { Drawer, Divider, Typography, withStyles, WithStyles } from '@material-ui/core';
import { Map, Table } from '../../../components';
import { CountryCases } from '../../../store/cases/types';
import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  fetchCasesByCountry: (params: any) => void;
  casesByCountry: CountryCases[];
}

const MainFormComponent = (props: Props) => {
  const { classes, casesByCountry } = props;

  React.useEffect(() => {
    props.fetchCasesByCountry(null);
    // eslint-disable-next-line
  }, []);

  const sorter = R.descend(R.prop('cases'));

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <Map></Map>
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
            <div>Total Cases By Country</div>
          </Typography>
          <Divider />
          <Table cases={R.sort(sorter, casesByCountry)}></Table>
        </div>
      </Drawer>
    </div>
  );
};

export default withStyles(styles)(MainFormComponent);
