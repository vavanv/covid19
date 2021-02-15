import * as React from 'react';
import * as R from 'ramda';
import { Typography, Divider, withStyles, WithStyles } from '@material-ui/core';

import { ShowDataByCountry, Table, TypeSelector, Drawer, Map, LeftMenu } from '../../components';
// import { MainContainer } from '../main-container';
import { CasesByCountry } from '../../store/cases/types';
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

function TotalByCountryComponent(props: Props) {
  const { classes, casesByCountry, selectedType } = props;

  React.useEffect(() => {
    props.fetchCasesByCountry(null);
    // eslint-disable-next-line
  }, []);

  const casesByCountrySorted = (casesByCountry: CasesByCountry[]) => {
    return R.sort(R.descend(R.prop(selectedType)), casesByCountry);
  };

  return (
    // <MainContainer
    //   mapChildren={casesByCountry.map(country => (
    //     <ShowDataByCountry country={country} selectedType={selectedType}></ShowDataByCountry>
    //   ))}
    //   drawerChildren={
    //     <div>
    //       <Typography variant="h6" className={classes.title}>
    //         <div>Total By Country</div>
    //       </Typography>
    //       <TypeSelector type={selectedType} />
    //       <Divider />
    //       <Table dataset={casesByCountrySorted(casesByCountry)} type={selectedType}></Table>
    //     </div>
    //   }
    // ></MainContainer>
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
}

export default withStyles(styles)(TotalByCountryComponent);
