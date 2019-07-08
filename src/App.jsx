import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Material helpers
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

// Routes
import Routes from './Routes';

// Browser history
const browserHistory = createBrowserHistory();

export default function App () {
    return (
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    );
}
