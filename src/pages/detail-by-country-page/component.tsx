import * as React from 'react';
import {
  Typography,
  Divider,
  withStyles,
  WithStyles,
  FormControl,
  TextField,
  MenuItem,
} from '@material-ui/core';
import classNames from 'classnames';

import { GridContainer, GridItem } from '../../components';
import { MainContainer } from '../main-container';
import { CasesByCountry } from '../../store/cases/types';
import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  fetchCasesByCountry: (params: any) => void;
  casesByCountry: CasesByCountry[];
  selectedType: string;
  value?: number | string;
}
// export interface MenuItem {
//   id: string;
//   icon: any;
//   route: string;
//   tooltip: string;
// }

function DetailByCountryComponent(props: Props) {
  const { classes, value, casesByCountry } = props;

  const marginTop = classNames({
    [classes.marginTop]: false,
  });

  const inputClasses = classNames({
    [classes.input]: true,
    [classes.inputSelect]: value === '0',
  });

  const inputSelect = classNames({
    [classes.input]: true,
    [classes.inputSelect]: true,
  });

  React.useEffect(() => {
    props.fetchCasesByCountry(null);
    // eslint-disable-next-line
  }, []);

  // const casesByCountrySorted = (casesByCountry: CasesByCountry[]) => {
  //   return R.sort(R.descend(R.prop(selectedType)), casesByCountry);
  // };

  let selectElements = [];
  selectElements[0] = (
    <MenuItem key={'0'} value={'0'} className={inputSelect}>
      {'Select Country'}
    </MenuItem>
  );
  selectElements = selectElements.concat(
    casesByCountry.map((country: CasesByCountry) => {
      return (
        <MenuItem
          key={country.countryInfo.iso3}
          value={country.countryInfo.iso3}
          className={classes.input}
        >
          {/* <div className={classes.table}>
            <tr>
              <td>
                <div>
                  <img
                    alt=""
                    src={country.countryInfo.flag}
                    style={{ height: '26px', width: '38px' }}
                  />
                </div>
              </td>
              <td className={classes.td_country}>
                <strong>{country.country}</strong>
              </td>
            </tr>
          </div> */}
          <div>
            <img alt="" src={country.countryInfo.flag} style={{ height: '16px', width: '28px' }} />{' '}
            {country.country}
          </div>
          {/* <div>
            {'  '}
            {country.country}
          </div> */}
          {/* <GridContainer>
            <GridItem>
              <img alt="" src={country.countryInfo.flag} style={{ height: '16px', width: '28px' }} />
            </GridItem>
            <GridItem>{country.country}</GridItem>
          </GridContainer> */}
        </MenuItem>
      );
    }),
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
    // setRoute(event.target.value);
    // const selectedRoute: Route = routeList.filter(r => r.shapeId === event.target.value)[0];
    // dispatch(selectRoute(selectedRoute));
  };

  return (
    <MainContainer
      mapChildren={null}
      // mapChildren={casesByCountry.map(country => (
      //   // <ShowDataByCountry country={country} selectedType={selectedType}></ShowDataByCountry>
      // ))}
      drawerChildren={
        <div>
          <Typography variant="h6" className={classes.title}>
            <div>Details By Country</div>
          </Typography>
          <Divider />
          <GridContainer className={classes.form}>
            <GridItem>
              <br />
              <GridContainer>
                <GridItem>
                  <FormControl fullWidth={true}>
                    <TextField
                      InputProps={{
                        classes: {
                          input: inputClasses,
                          root: marginTop,
                        },
                      }}
                      InputLabelProps={{
                        className: classes.labelRoot,
                      }}
                      select={true}
                      // value={route}
                      // label={'Select Country'}
                      className={classes.margin}
                      onChange={handleChange}
                    >
                      {selectElements}
                    </TextField>
                  </FormControl>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
      }
    ></MainContainer>
  );
}

export default withStyles(styles)(DetailByCountryComponent);
