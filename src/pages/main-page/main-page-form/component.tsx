import * as React from 'react';
import { Drawer, Divider, withStyles, WithStyles } from '@material-ui/core';
import { Map, Table } from '../../../components';
import { CountryCases } from '../../../store/cases/types';
import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  fetchCountriesCases: (params: any) => void;
  countriesCases: CountryCases[];
}

const MainFormComponent = (props: Props) => {
  const { classes, countriesCases } = props;

  React.useEffect(() => {
    props.fetchCountriesCases(null);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <Map></Map>
      </main>
      <Drawer variant="permanent" classes={{ paper: classes.drawer }} anchor="right">
        <div className={classes.drawerContainer}>
          <Divider />
          <Table countries={countriesCases}></Table>
        </div>
      </Drawer>
    </div>
  );
};

export default withStyles(styles)(MainFormComponent);
