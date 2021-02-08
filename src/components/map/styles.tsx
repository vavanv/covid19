import { createStyles } from '@material-ui/core';

export const styles = () => {
  return createStyles({
    map: {
      width: '100vw',
      height: '100vh',
      '& .leaflet-container ': {
        height: '100%',
      },
    },
  });
};
