import { createStyles, Theme } from '@material-ui/core';

export const styles = ({ palette, spacing }: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
    },
    title: {
      flexGrow: 1,
      margin: '20px',
    },
    content: {
      flexGrow: 1,
    },
    list: {
      paddingLeft: 10,
      paddingRight: 0,
      paddingTop: 50,
      paddingBottom: 5,
      '& svg': {
        fontSize: 40,
      },
      overflowX: 'hidden',
    },
    itemIcon: {
      margin: 0,
    },
  });
};
