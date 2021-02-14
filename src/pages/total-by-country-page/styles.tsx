import { createStyles } from '@material-ui/core';

export const styles = () => {
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
