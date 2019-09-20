import * as React from 'react';

import Header from 'components/Header/Header';
import ListCard from 'components/Card/ListCard/ListCard';

import { CardItemType } from 'types'
import { HandleGettingAllCharacters, HandleDeleteCharacter } from 'store/domains';

interface HomeProps {
  characters: CardItemType[];
  handleGettingAllCharacters: HandleGettingAllCharacters;
  handleDeleteCharacter: HandleDeleteCharacter;
}

const Home: React.FC<HomeProps> = ({
  characters,
  handleGettingAllCharacters,
  handleDeleteCharacter }) => {
  React.useEffect(() => {
    handleGettingAllCharacters();
  }, [])
  return (
    <React.Fragment>
      <Header />
      <ListCard
        characters={characters}
        handleDeleteCharacter={handleDeleteCharacter} />
    </React.Fragment>
  );
};

export default Home;
