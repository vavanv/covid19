import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import numeral from 'numeral';
import { Circle, Popup } from 'react-leaflet';

import { CasesByCountry } from '../../store/cases/types';
import { styles } from './styles';

const optionsByType = [
  { type: 'cases', option: { multiplier: 20000, color: '#ffc107', fillColor: '#ffc107' } },
  { type: 'recovered', option: { multiplier: 35000, color: '#7dd71d', fillColor: '#7dd71d' } },
  { type: 'deaths', option: { multiplier: 200000, color: '#cc1034', fillColor: '#cc1034' } },
];

interface Props extends WithStyles<typeof styles> {
  country: CasesByCountry;
  // casesType: string;
}

const ShowDataByCountryComponent = (props: Props) => {
  // const { country, casesType } = props;
  const { classes, country } = props;
  const selectByType = optionsByType.find(t => t.type === 'cases');
  const options = selectByType?.option;
  const multiplier = selectByType?.option.multiplier ?? 0;

  return (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      pathOptions={options}
      radius={Math.sqrt(country.cases * multiplier)}
    >
      <Popup>
        <div className={classes.info_container}>
          <div
            className={classes.info_flag}
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          />
          <div className={classes.info_country_name}>{country.country}</div>
          <div>Cases: {numeral(country.cases).format('0,0')}</div>
          <div>Recovered: {numeral(country.recovered).format('0,0')}</div>
          <div>Deaths: {numeral(country.deaths).format('0,0')}</div>
        </div>
      </Popup>
    </Circle>
  );
};

export const ShowDataByCountry = React.memo(withStyles(styles)(ShowDataByCountryComponent));
