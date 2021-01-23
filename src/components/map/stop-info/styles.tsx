import { createStyles, Theme } from '@material-ui/core';

export const styles = ({ spacing, transitions }: Theme) => {
  return createStyles({
    card: {
      maxWidth: 400,
      paddingLeft: spacing(1),
      paddingRight: spacing(1),
      paddingBottom: spacing(1),
      marginTop: spacing(2),
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: transitions.create('transform', {
        duration: transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  });
};
