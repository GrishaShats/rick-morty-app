import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers';
import {  BrowserRouter as Router } from 'react-router-dom';

/*
import Menu from './components/Menu/Menu';
*/

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);