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

import { AppState } from '../../store/app-state';
import { Drawer, Map, ShowDataByCountry, Flag } from '../../components';
import { CasesByCountry, TypeOfOutput } from '../../store/cases/types';
import { actions } from '../../features/cases/reducer';
import { Menu } from './../../features/menu';

import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {}

const DetailByCountryComponent = (props: Props) => {
  const { classes } = props;
  const dispatch = useDispatch();

  const casesByCountry = useSelector((store: AppState) => store.casesByCountry.items);

  const [selectedCountry, setSelectedCountry] = React.useState<CasesByCountry | null>(null);
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
    dispatch(actions.fetchCasesByCountryRequest());
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
  };

  return (
    <div className={classes.root}>
      <Menu />
      <main className={classes.content}>
        <Map center={mapCenter} zoom={mapZoom}>
          <ShowDataByCountry
            country={selectedCountry}
            selectedType={TypeOfOutput.cases}
          ></ShowDataByCountry>
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

export const DetailByCountry = withStyles(styles)(DetailByCountryComponent);
