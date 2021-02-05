import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import numeral from 'numeral';

import { CasesByCountry } from '../../store/cases/types';
import { TypeOfOutput } from '../../utils/common/constants';
import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  dataset: CasesByCountry[];
  type: string;
}

const renderCount = (country: CasesByCountry, type: string) => {
  switch (type) {
    case TypeOfOutput.cases:
      return numeral(country.cases).format('0,0');
    case TypeOfOutput.recovered:
      return numeral(country.recovered).format('0,0');
    case TypeOfOutput.deaths:
      return numeral(country.deaths).format('0,0');
    default:
      return 0;
  }
};

const TableComponent = (props: Props & WithStyles<typeof styles>) => {
  const { classes, dataset, type } = props;

  return (
    <div className={classes.table}>
      {dataset.map((country: CasesByCountry) => (
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
          <td className={classes.td_count}>
            <strong>{renderCount(country, type)}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
};

export const Table = React.memo(withStyles(styles)(TableComponent));
