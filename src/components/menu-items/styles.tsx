import { createStyles, Theme } from '@material-ui/core';

export const styles = ({ palette, spacing }: Theme) => {
  return createStyles({
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
