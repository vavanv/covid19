import { createStyles, Theme } from '@material-ui/core';

export const styles = ({ palette }: Theme) => {
  return createStyles({
    info_container: {
      width: '880px',
    },
    paper: {
      width: '95%',
    },
    // flag_box: {
    //   width: '100%',
    //   height: '180px',
    // },
    // img: {
    //   width: '100%',
    //   height: '100%',
    //   borderColor: palette.primary.light,
    //   borderStyle: 'solid ',
    //   borderWidth: 'thin',
    // },
    info_country_name: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: palette.primary.dark,
    },
    chart: {
      width: '100%',
      paddingRight: '30px',
    },
  });
};
