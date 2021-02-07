import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import numeral from 'numeral';
import { Circle, Popup } from 'react-leaflet';

import { cases_color, recovered_color, deaths_color } from '../../assets/jss/portal-material';
import { CasesByCountry, TypeOfOutput } from '../../store/cases/types';
import { styles } from './styles';

const getOptionsByType = (type: string) => {
  switch (type) {
    case TypeOfOutput.cases:
      return { multiplier: 35000, color: cases_color, fillColor: cases_color };
    case TypeOfOutput.recovered:
      return { multiplier: 35000, color: recovered_color, fillColor: recovered_color };
    case TypeOfOutput.deaths:
      return { multiplier: 300000, color: deaths_color, fillColor: deaths_color };
    default:
      return;
  }
};

interface Props extends WithStyles<typeof styles> {
  country: CasesByCountry;
  selectedType: string;
}

const ShowDataByCountryComponent = (props: Props) => {
  const { classes, country, selectedType } = props;
  const options = getOptionsByType(selectedType);
  const multiplier = options?.multiplier ?? 0;

  const radius = (type: string, country: CasesByCountry, multiplier: number) => {
    switch (type) {
      case TypeOfOutput.cases:
        return Math.sqrt(country.cases * multiplier);
      case TypeOfOutput.recovered:
        return Math.sqrt(country.recovered * multiplier);
      case TypeOfOutput.deaths:
        return Math.sqrt(country.deaths * multiplier);
      default:
        return 0;
    }
  };

  return (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      pathOptions={options}
      //radius={Math.sqrt(country.cases * multiplier)}
      radius={radius(selectedType, country, multiplier)}
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
