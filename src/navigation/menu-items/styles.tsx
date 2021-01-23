import { createStyles, Theme } from '@material-ui/core';

export const styles = ({ palette, spacing }: Theme) => {
  return createStyles({
    rootDiv: {
      height: '100%',
    },
    list: {
      padding: 0,
      '& svg': {
        fontSize: 20,
      },
    },
    categoryHeader: {
      paddingTop: 20,
      paddingBottom: spacing(2),
    },
    categoryHeaderText: {
      fontSize: 15,
      fontWeight: 500,
      color: palette.common.white,
    },
    item: {
      '&:hover': {
        background: 'rgba(255,255,255,.08)',
      },
      paddingTop: spacing(1) / 4,
      paddingBottom: spacing(1) / 4,
    },
    itemIcon: {
      margin: 0,
    },
    itemText: {
      fontSize: 14,
      fontWeight: 500,
      '&$textDense': {
        fontSize: 14,
        fontWeight: 500,
      },
    },
    divider: {
      marginTop: spacing(2),
      background: palette.primary.dark,
    },
    textDense: {},
  });
};
