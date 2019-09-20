import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import store, { history } from './store';

import App from 'containers/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ConnectedRouter } from 'connected-react-router';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.Fragment>
        <App />
      </React.Fragment>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);