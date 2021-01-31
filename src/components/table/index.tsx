import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import { Cases } from '../../store/cases/types';
import numeral from 'numeral';
import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  cases: Cases;
}

const TableComponent = (props: Props & WithStyles<typeof styles>) => {
  const { classes, cases } = props;

  return (
    <div className={classes.table}>
      {cases.map(({ country, cases, countryInfo }: any) => (
        <tr>
          <td>
            <div className="table__info-flag">
              <img alt="" src={countryInfo.flag} style={{ height: '26px', width: '38px' }} />
            </div>
          </td>
          <td>
            <strong>{country}</strong>
          </td>
          <td>
            <strong>{numeral(cases).format('0,0')}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
};

export const Table = React.memo(withStyles(styles)(TableComponent));
