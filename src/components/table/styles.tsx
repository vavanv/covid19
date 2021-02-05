import { createStyles, Theme } from '@material-ui/core';

export const styles = ({ spacing }: Theme) => {
  return createStyles({
    table: {
      marginTop: '20px',
      marginLeft: '20px',
      marginRight: '10px',
      overflow: 'scroll',
      overflowX: 'hidden',
      height: '85%',
      '& tr': {
        display: 'flex',
      },
      '& td': {
        padding: spacing(0.5),
      },
    },
    td_country: {
      width: '100%',
      align: 'left',
    },
    td_count: {
      width: '120px',
      align: 'right',
      textAlign: 'right',
    },
  });
};
