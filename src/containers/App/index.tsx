import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from 'containers/Home';
import CharacterPage from 'containers/CharacterPage';
import CharacterManager from 'containers/CharacterManager';
import Menu from 'components/Menu/Menu';
import Footer from 'components/Footer/Footer';
import { getCharacters } from 'store/domains/characters/api';
import { CardItem } from 'types'

type State = {
  info: object;
  characters: CardItem[];
};

export default class App extends React.Component<{}, State> {
  state = {
    info: {},
    characters: [],
  };

  setCharacters(res: any): void {
    this.setState({
      info: res.info,
      characters: res.results,
    });
    console.log(this.state.characters)
  }

  componentWillMount() {
    getCharacters().then((res) => {
      this.setCharacters(JSON.parse(JSON.stringify(res)));
    });
  }

  render() {
    const characters = this.state.characters;

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
}






