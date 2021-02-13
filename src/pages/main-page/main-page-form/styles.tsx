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
  });
};
