import { createStyles, Theme } from '@material-ui/core';

export const styles = ({ palette }: Theme) => {
  return createStyles({
    info_container: {
      width: '250px',
    },
    info_flag: {
      height: '120px',
      width: '180px',
      backgroundSize: 'cover',
      borderColor: palette.primary.light,
      borderStyle: 'solid ',
      borderWidth: 'thin',
    },
    info_country_name: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: palette.primary.dark,
    },
  });
};
