import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Menu from 'components/Menu/Menu';
import Footer from 'components/Footer/Footer';

import Home from 'containers/Home';
import CharacterPage from 'containers/CharacterPage';
import CharacterManager from 'containers/CharacterManager';

import { CardItemType } from 'types'
import { HandleGettingAllCharacters } from 'store/domains';

interface AppProps {
  characters: CardItemType[];
  handleGettingAllCharacters: HandleGettingAllCharacters;
}

const App: React.FC<AppProps> = ({ characters, handleGettingAllCharacters }) => {
  React.useEffect(() => {
    handleGettingAllCharacters();
  }, [])
  return (
    <React.Fragment>
      <Menu />
      <Switch>
        <Route exact path="/" render={routerProps => (
          <Home {...routerProps} characters={characters} />
        )} />
        <Route path="/character" component={CharacterPage} />
        <Route path="/manager" component={CharacterManager} />
        <Redirect from='*' to='/' />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;