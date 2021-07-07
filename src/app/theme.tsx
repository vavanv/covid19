import { createMuiTheme,responsiveFontSizes } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#546e7a',
    },
  },
});

export default responsiveFontSizes(theme);