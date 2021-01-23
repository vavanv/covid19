import { createStyles, Theme } from '@material-ui/core';
import { dividerColor, headerBackground } from '../../../assets/jss/portal-material';

export const styles = ({ spacing }: Theme) =>
  createStyles({
    header: {
      background: headerBackground,
      boxShadow: `inset 0 -1px ${dividerColor}`,
    },
    itemIcon: {
      margin: 0,
    },
    baseHeader: {
      marginLeft: spacing(1),
    },
  });
