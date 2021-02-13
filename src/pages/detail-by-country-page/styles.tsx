import { createStyles, Theme } from '@material-ui/core';

export const styles = ({ palette, spacing }: Theme) => {
  return createStyles({
    title: {
      flexGrow: 1,
      margin: '20px',
    },
  });
};
