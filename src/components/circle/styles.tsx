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
    },
    info_country_name: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: palette.primary.dark,
    },
  });
};
