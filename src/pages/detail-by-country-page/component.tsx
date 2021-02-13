import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';

import { MainContainer } from '../main-container';
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

function DetailByCountryComponent(props: Props) {
  // const { classes, casesByCountry, selectedType } = props;

  React.useEffect(() => {
    props.fetchCasesByCountry(null);
    // eslint-disable-next-line
  }, []);

  // const casesByCountrySorted = (casesByCountry: CasesByCountry[]) => {
  //   return R.sort(R.descend(R.prop(selectedType)), casesByCountry);
  // };

  return (
    <MainContainer
    // mapChildren={casesByCountry.map(country => (
    //   // <ShowDataByCountry country={country} selectedType={selectedType}></ShowDataByCountry>
    // ))}
    // drawerChildren={
    //   <div>
    //     <Typography variant="h6" className={classes.title}>
    //       <div>Total By Country</div>
    //     </Typography>
    //     <TypeSelector type={selectedType} />
    //     <Divider />
    //     <Table dataset={casesByCountrySorted(casesByCountry)} type={selectedType}></Table>
    //   </div>
    // }
    ></MainContainer>
  );
}

export default withStyles(styles)(DetailByCountryComponent);
