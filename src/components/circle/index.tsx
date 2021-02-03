import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import numeral from 'numeral';
import { Circle, Popup } from 'react-leaflet';

import { CasesByCountry } from '../../store/cases/types';

import { styles } from './styles';

// const casesTypeColors = {
//   cases: {
//     multiplier: 200,
//     option: { color: '#ffc107', fillColor: '#ffc107' },
//   },
//   recovered: {
//     multiplier: 350,
//     option: { color: '#7dd71d', fillColor: '#7dd71d' },
//   },
//   deaths: {
//     multiplier: 1000,
//     option: { color: '#cc1034', fillColor: '#cc1034' },
//   },
// };

interface Props extends WithStyles<typeof styles> {
  country: CasesByCountry;
  // casesType: string;
}

const ShowDataByCountryComponent = (props: Props) => {
  // const { country, casesType } = props;
  const { classes, country } = props;
  return (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      // pathOptions={casesTypeColors[casesType].option}
      // radius={Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier}
      pathOptions={{ color: '#ffc107', fillColor: '#ffc107' }}
      radius={Math.sqrt(country.cases * 20000)}
    >
      <Popup>
        <div className={classes.info_container}>
          <div
            className={classes.info_flag}
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          />
          <div className={classes.info_country_name}>{country.country}</div>
          <div className={classes.info_confirmed}>
            Cases: {numeral(country.cases).format('0,0')}
          </div>
          <div className={classes.info_recovered}>
            Recovered: {numeral(country.recovered).format('0,0')}
          </div>
          <div className={classes.info_deaths}>Deaths: {numeral(country.deaths).format('0,0')}</div>
        </div>
      </Popup>
    </Circle>
  );
};

export const ShowDataByCountry = React.memo(withStyles(styles)(ShowDataByCountryComponent));
