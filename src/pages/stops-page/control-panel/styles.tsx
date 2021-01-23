import { createStyles, Theme } from '@material-ui/core';

export const styles = ({ palette, spacing }: Theme) => {
  return createStyles({
    controlPanel: {
      position: 'absolute',
      top: spacing(8.5),
      right: spacing(0.5),
      maxWidth: '250px',
      background: '#fff',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
      padding: spacing(2),
      margin: spacing(2),
      color: '#6b6b76',
    },
    form: {
      margin: '0',
    },
    legend: {
      verticalAlign: 'middle',
      color: palette.grey[500],
    },
  });
};
