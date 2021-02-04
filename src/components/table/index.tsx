import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import { CasesByCountry } from '../../store/cases/types';
import numeral from 'numeral';
import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  dataset: CasesByCountry[];
  type: string;
}

const TableComponent = (props: Props & WithStyles<typeof styles>) => {
  const { classes, dataset, type } = props;

  return (
    <div className={classes.table}>
      {dataset.map((country: CasesByCountry) => (
        <tr>
          <td>
            <div className="table__info-flag">
              <img
                alt=""
                src={country.countryInfo.flag}
                style={{ height: '26px', width: '38px' }}
              />
            </div>
          </td>
          <td>
            <strong>{country.country}</strong>
          </td>
          <td>
            <strong>{numeral(country.cases).format('0,0')}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
};

export const Table = React.memo(withStyles(styles)(TableComponent));
