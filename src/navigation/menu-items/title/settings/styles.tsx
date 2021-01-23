import { createStyles, Theme } from '@material-ui/core';
import { dividerColor, headerBackground } from '../../../../assets/jss/portal-material';

export const styles = ({ spacing }: Theme) =>
  createStyles({
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
    },
    header: {
      background: headerBackground,
      boxShadow: `inset 0 -1px ${dividerColor}`,
    },
    headerItem: {
      background: headerBackground,
    },
    baseHeader: {
      marginLeft: spacing(1),
    },
    unPaddedRight: {
      paddingRight: 0,
    },
    smallIcon: {
      paddingTop: spacing(1),
      paddingBottom: spacing(1),
      borderLeft: `1px solid ${dividerColor}`,
      borderRadius: 0,
      '&:hover': {
        background: 'none',
      },
    },
  });
