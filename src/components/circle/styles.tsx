import { createStyles, Theme } from '@material-ui/core';
// import { grey } from '@material-ui/core/colors';

export const styles = ({ spacing }: Theme) => {
  return createStyles({
    info_container: {
      width: '150px',
    },
    info_flag: {
      height: '80px',
      width: '100%',
      backgroundSize: 'cover',
      // borderRadius: '20px',
      '& image': {
        width: '100px',
        // borderRadius: '1px',
      },
    },
    info_country_name: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#555',
    },
    info_confirmed: {
      fontSize: '12px',
      marginTop: '2px',
    },
    info_recovered: {
      fontSize: '12px',
      marginTop: '2px',
    },
    info_deaths: {
      fontSize: '12px',
      marginTop: '2px',
    },
  });
};
