import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Menu from 'components/Menu';
import Footer from 'components/Footer';

import Home from 'containers/Home';
import CharacterPage from 'containers/CharacterPage';
import CharacterManager from 'containers/CharacterManager';
import {
  CardItemType,
  HandleDeleteCharacter,
  HandleFilterCharacters,
  HandleGettingAllCharacters,
  HandleSetInitialForm,
  HandleToggleModal,
  HandleUpdateOneCharacter,
} from 'store/domains';
import { InputFieldType } from 'types';

interface AppProps {
  characters: CardItemType[];
  isLoading: boolean;
  isModalOpen: boolean;
  filterSelectOptions: InputFieldType[];
  handleDeleteCharacter: HandleDeleteCharacter;
  handleFilterCharacters: HandleFilterCharacters;
  handleGettingAllCharacters: HandleGettingAllCharacters;
  handleSetInitialForm: HandleSetInitialForm;
  handleToggleModal: HandleToggleModal;
  handleUpdateOneCharacter: HandleUpdateOneCharacter;
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
