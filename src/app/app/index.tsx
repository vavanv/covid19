import * as React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { Router } from 'react-router-dom';

import History from './history';
import Store from './store';
import Theme from './theme';
import Routes from './routes';

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <MuiThemeProvider theme={Theme}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            {/* CssBaseline kickstart an elegant, consistent,
              and simple baseline to build upon. */}
            <CssBaseline />
            <Router history={History}>
              <Routes />
            </Router>
          </MuiPickersUtilsProvider>
        </MuiThemeProvider>
      </Provider>
    </>
  );
};

export default App;
