import { createStyles, Theme } from '@material-ui/core';

export const styles = ({ spacing }: Theme) =>
  createStyles({
    author: {
      position: 'absolute',
      bottom: spacing(2),
      marginLeft: spacing(2),
      fontSize: 12,
      fontWeight: 500,
    },
  });
