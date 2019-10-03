import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import store, { history } from './store';

import App from 'containers/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider, theme } from 'theme';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </React.Fragment>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
