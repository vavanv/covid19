import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

import { AppState } from '../../store/types';
import { Drawer, Map, ShowVaccineCoverageByCountry, Flag } from '../../components';
import { CasesByCountry } from '../../store/cases/types';
import { actions as coverageActions } from '../../features/coverage-info/reducer';
import { actions as casesActions } from '../../features/cases/reducer';
import { DataElement } from '../../store/coverage-info/types';
import { Menu } from './../../features/menu';

import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {}

const CoverageByCountryComponent = (props: Props) => {
  const { classes } = props;
  const dispatch = useDispatch();

  const casesByCountry = useSelector((store: AppState) => store.root.casesByCountry.items);
  const coverageInfo = useSelector((store: AppState) => store.root.coverage.items);

  const [selectedCountry, setSelectedCountry] = React.useState<CasesByCountry | null>(null);
  const [chartData, setSelectedCoverage] = React.useState<DataElement[]>([]);
  const [mapCenter, setMapCenter] = React.useState({ lat: 0, lng: 50 });
  const [mapZoom, setMapZoom] = React.useState(3);

  const marginTop = classNames({
    [classes.marginTop]: false,
  });

  const inputClasses = classNames({
    [classes.input]: true,
  });

  const inputSelect = classNames({
    [classes.input]: true,
    [classes.inputSelect]: true,
  });

  React.useEffect(() => {
    dispatch(casesActions.fetchCasesByCountryRequest());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(coverageActions.fetchCoverageRequest());
  }, [dispatch]);

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
          <div>
            <table>
              <tr>
                <td>
                  <Flag flag={country.countryInfo.flag} />
                </td>
                <td>{country.country}</td>
              </tr>
            </table>
          </div>
        </MenuItem>
      );
    }),
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
    setSelectedCountry(null);
    if (event.target.value === '0') {
      setMapCenter({ lat: 0, lng: 50 });
      setMapZoom(3);
      return;
    }

    var selectedCountry = casesByCountry.filter(r => r.countryInfo.iso3 === event.target.value)[0];
    setSelectedCountry(selectedCountry);
    setMapCenter({ lat: selectedCountry.countryInfo.lat, lng: selectedCountry.countryInfo.long });
    setMapZoom(5);

    var selectedCoverage = coverageInfo.filter(v => v.country === selectedCountry.country);
    var chartData: Array<DataElement> = new Array<DataElement>();

    if (selectedCoverage.length === 0) {
      return;
    }
    var array = JSON.stringify(selectedCoverage[0].timeline)
      .split(',')
      .map(i => i.split(':'));

    array.forEach(element => {
      var elementDate = element[0]
        .replaceAll('"', '')
        .replaceAll('{', '')
        .replaceAll('}', '');
      var elementNumber: number = +element[1];
      const dataElement: DataElement = {
        date: elementDate,
        number: elementNumber,
      };
      chartData.push(dataElement);
    });
    chartData = chartData.slice(chartData.length - 8, chartData.length - 1);
    setSelectedCoverage(chartData);
  };

  return (
    <div className={classes.root}>
      <Menu />
      <main className={classes.content}>
        <Map center={mapCenter} zoom={mapZoom}>
          <ShowVaccineCoverageByCountry
            country={selectedCountry}
            data={chartData}
          ></ShowVaccineCoverageByCountry>
        </Map>
      </main>
      <Drawer minWidth={'400px'} anchor={'right'}>
        <Typography variant="h6" className={classes.title}>
          <div>Details By Country</div>
        </Typography>
        <Divider />
        <br />
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
            value={selectedCountry === null ? '0' : selectedCountry?.countryInfo.iso3}
            className={classes.margin}
            onChange={handleChange}
          >
            {selectElements}
          </TextField>
        </FormControl>
      </Drawer>
    </div>
  );
};

export const CoverageByCountry = withStyles(styles)(CoverageByCountryComponent);
