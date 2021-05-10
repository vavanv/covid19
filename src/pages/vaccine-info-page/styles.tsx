import { createStyles, Theme } from '@material-ui/core';

export const styles = ({ palette, spacing }: Theme) => {
  return createStyles({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
    },
    listRoot: {
      marginLeft: '100px',
      width: '60%',
      maxWidth: '60%',
      zIndex: 1000,
      // background: 'black',
    },
    inline: {
      display: 'inline',
    },
    listContent: {
      height: 'calc(100% - 2rem)',
      overflowY: 'auto',
    },
  });
};
