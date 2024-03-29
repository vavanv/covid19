import * as React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { BrowserRouter as Router } from 'react-router-dom';

import store from '../store/create-store';
import AppTheme from './theme';
import Routes from './routes';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <MuiThemeProvider theme={AppTheme}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            {/* CssBaseline kickstart an elegant, consistent,
              and simple baseline to build upon. */}
            <CssBaseline />
            <Router>
              <Routes />
            </Router>
          </MuiPickersUtilsProvider>
        </MuiThemeProvider>
      </Provider>
    </>
  );
};

export default App;
