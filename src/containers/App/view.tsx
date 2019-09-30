import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Menu from 'components/Menu';
import Footer from 'components/Footer';

import Home from 'containers/Home';
import CharacterPage from 'containers/CharacterPage';
import CharacterManager from 'containers/CharacterManager';
import {
  HandleGettingAllCharacters,
  CardItemType,
  HandleUpdateOneCharacter,
  HandleDeleteCharacter,
  HandleToggleModal,
  HandleSetInitialForm,
  HandleFilterCharacters,
} from 'store/domains';
import { InputFieldType } from 'types';

interface AppProps {
  characters: CardItemType[];
  isLoading: boolean;
  handleGettingAllCharacters: HandleGettingAllCharacters;
  handleUpdateOneCharacter: HandleUpdateOneCharacter;
  handleDeleteCharacter: HandleDeleteCharacter;
  handleToggleModal: HandleToggleModal;
  handleSetInitialForm: HandleSetInitialForm;
  handleFilterCharacters: HandleFilterCharacters;
  isModalOpen: boolean;
  filterSelectOptions: InputFieldType[];
}

const App: React.FC<AppProps> = ({
  characters,
  isLoading,
  handleGettingAllCharacters,
  handleUpdateOneCharacter,
  handleDeleteCharacter,
  handleToggleModal,
  handleSetInitialForm,
  handleFilterCharacters,
  isModalOpen,
  filterSelectOptions,
}) => {
  React.useEffect(() => {
    handleGettingAllCharacters();
  }, [])
  return (
    <React.Fragment>
      <Menu />
      <Switch>
        <Route exact={true} path="/"
          render={routeProps => (
            <Home {...routeProps}
              isLoading={isLoading}
              characters={characters}
              handleDeleteCharacter={handleDeleteCharacter}
              handleToggleModal={handleToggleModal}
              handleUpdateOneCharacter={handleUpdateOneCharacter}
              handleSetInitialForm={handleSetInitialForm}
              handleFilterCharacters={handleFilterCharacters}
              isModalOpen={isModalOpen}
              filterSelectOptions={filterSelectOptions}
            />
          )}
        />
        <Route path="/character/:id" component={CharacterPage} />
        <Route path="/manager" component={CharacterManager} />
        <Redirect from='*' to='/' />
      </Switch>
      <Footer
        charactersLength={characters.length} />
    </React.Fragment>
  );
};

export default App;
