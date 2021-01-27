import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#546e7a',
    },
  },
  overrides: {
    MuiDrawer: {
      paper: {
        minWidth: 300,
      },
      paperAnchorDockedRight: {
        borderLeft: 'none',
      },
    },
  },
});
