import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import numeral from 'numeral';
import { Circle, Popup } from 'react-leaflet';
import { Chart, PieSeries, Legend } from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

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
      return { multiplier: 350000, color: deaths_color, fillColor: deaths_color };
    default:
      return;
  }
};

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

interface Props extends WithStyles<typeof styles> {
  country: CasesByCountry | null;
  selectedType: string;
}

const ShowDataByCountryComponent = (props: Props) => {
  const { classes, country, selectedType } = props;
  const options = getOptionsByType(selectedType);
  const multiplier = options?.multiplier ?? 0;

  let data: any = [];
  if (country) {
    data = [
      { type: `Cases: ${numeral(country.cases).format('0,0')}`, number: country.cases },
      { type: `Recovered: ${numeral(country.recovered).format('0,0')}`, number: country.recovered },
      { type: `Active: ${numeral(country.active).format('0,0')}`, number: country.active },
      { type: `Deaths: ${numeral(country.deaths).format('0,0')}`, number: country.deaths },
    ];
  }

  return (
    country && (
      <Circle
        center={[country.countryInfo.lat, country.countryInfo.long]}
        fillOpacity={0.4}
        pathOptions={options}
        radius={radius(selectedType, country, multiplier)}
      >
        <Popup>
          <div className={classes.info_container}>
            <div className={classes.flag_box}>
              <img alt="" src={country.countryInfo.flag} className={classes.img}></img>
            </div>
            <div className={classes.info_country_name}>{country.country}</div>
            <div>Population: {numeral(country.population).format('0,0')}</div>
            <div>
              <Chart data={data} height={200}>
                <Legend></Legend>
                <PieSeries valueField="number" argumentField="type" innerRadius={0.5} />
                <Animation />
              </Chart>
            </div>
          </div>
        </Popup>
      </Circle>
    )
  );
};

export const ShowDataByCountry = React.memo(withStyles(styles)(ShowDataByCountryComponent));
