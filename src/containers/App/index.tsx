import React from 'react';
import { Route, Link, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from 'containers/Home';
import CharacterPage from 'containers/CharacterPage';
import CharacterManager from 'containers/CharacterManager';
import Menu from 'components/Menu/Menu';
import Footer from 'components/Footer/Footer';


export const App: React.StatelessComponent<{}> = () => {

  return(
    <React.Fragment>
      <Menu/>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/character" component={ CharacterPage } />
        <Route path="/manager" component={ CharacterManager } />
        <Redirect from='*' to='/'/>
      </Switch>
      <Footer/>
    </React.Fragment>
  );
};
