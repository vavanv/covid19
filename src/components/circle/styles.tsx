import { createStyles, Theme } from '@material-ui/core';

export const styles = ({ spacing, palette }: Theme) => {
  return createStyles({
    info_container: {
      width: '150px',
    },
    info_flag: {
      height: '80px',
      width: '100%',
      backgroundSize: 'cover',
      '& image': {
        width: '100px',
      },
    },
    info_country_name: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: palette.primary.dark,
    },
    info_confirmed: {
      fontSize: '12px',
      marginTop: spacing(0.3),
    },
    info_recovered: {
      fontSize: '12px',
      marginTop: spacing(0.3),
    },
    info_deaths: {
      fontSize: '12px',
      marginTop: spacing(0.3),
    },
  });
};
