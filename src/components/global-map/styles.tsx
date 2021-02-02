import { createStyles, Theme } from '@material-ui/core';

export const styles = ({ spacing }: Theme) => {
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
