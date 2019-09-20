import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Menu from 'components/Menu/Menu';
import Footer from 'components/Footer/Footer';

import Home from 'containers/Home';
import CharacterPage from 'containers/CharacterPage';
import CharacterManager from 'containers/CharacterManager';

const App: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <Menu />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/character" component={CharacterPage} />
        <Route path="/manager" component={CharacterManager} />
        <Redirect from='*' to='/' />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;