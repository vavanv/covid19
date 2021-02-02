import { createStyles } from '@material-ui/core';

export const styles = () => {
  return createStyles({
    table: {
      marginTop: '20px',
      marginLeft: '20px',
      // marginRight: '20px',
      overflow: 'scroll',
      overflowX: 'hidden',
      height: '90%',
      '& tr': {
        display: 'flex',
        justifyContent: 'space-between',
      },
      '& td': {
        padding: '0.5rem',
      },
    },
  });
};
