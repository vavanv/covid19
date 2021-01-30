import { createStyles, Theme } from '@material-ui/core';

export const styles = ({ palette }: Theme) => {
  return createStyles({
    table: {
      marginTop: '20px',
      marginLeft: '20px',
      overflow: 'scroll',
      overflowX: 'hidden',
      height: '800px',
      // color: palette.primary.dark,
      // backgroundColor: 'transparent',
      '&:tr': {
        display: 'flex',
        justifyContent: 'space-between',
      },
      '&:td': {
        padding: '0.5rem',
        // color: palette.primary.dark,
      },
      '&:td:nth-of-type(odd)': {
        backgroundColor: '#f3f3f8',
      },
    },
  });
};
