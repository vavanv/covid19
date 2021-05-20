import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import numeral from 'numeral';
import { Circle, Popup } from 'react-leaflet';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { ValueScale, Animation } from '@devexpress/dx-react-chart';

import { cases_color } from '../../assets/jss/portal-material';
import { CasesByCountry } from '../../store/cases/types';
import { DataElement } from '../../store/coverage-info/types';

import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  country: CasesByCountry | null;
  data: DataElement[] | undefined;
}

const ShowVaccineCoverageByCountryComponent = (props: Props) => {
  const { classes, country, data } = props;
  const options = { multiplier: 35000, color: cases_color, fillColor: cases_color };

  return country ? (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      pathOptions={options}
      radius={Math.sqrt(country.cases * 35000)}
    >
      <Popup className={classes.info_container}>
        <div className={classes.info_container}>
          <div className={classes.info_country_name}>{country.country}</div>
          <div>Population: {numeral(country.population).format('0,0')}</div>
          <div>
            <Chart data={data}>
              <ValueScale name="number" />
              <ArgumentAxis />
              <ValueAxis scaleName="number" showGrid={false} showLine showTicks />
              <BarSeries
                name="Vaccination"
                valueField="number"
                argumentField="date"
                scaleName="number"
              />
              <Animation />
              <Legend />
            </Chart>
          </div>
        </div>
      </Popup>
    </Circle>
  ) : (
    <></>
  );
};

export const ShowVaccineCoverageByCountry = React.memo(
  withStyles(styles)(ShowVaccineCoverageByCountryComponent),
);
