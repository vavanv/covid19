import { createStyles, Theme } from '@material-ui/core';

export const styles = ({ palette }: Theme) => {
  return createStyles({
    info_container: {
      width: '280px',
    },
    info_flag: {
      // height: '80px',
      // width: '100%',
      aspectRatio: '28 / 20',
      height: 'auto',
      width: '140px',
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
