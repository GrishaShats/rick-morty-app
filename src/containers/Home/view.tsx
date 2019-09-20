import * as React from 'react';

import Header from 'components/Header/Header';
import ListCard from 'components/Card/ListCard/ListCard';

import { CardItemType } from 'types'
import { HandleGettingAllCharacters } from 'store/domains';

interface HomeProps {
  characters: CardItemType[];
  handleGettingAllCharacters: HandleGettingAllCharacters;
}

const Home: React.FC<HomeProps> = ({ characters, handleGettingAllCharacters }) => {
  React.useEffect(() => {
    handleGettingAllCharacters();
  }, [])
  return (
    <React.Fragment>
      <Header />
      <ListCard characters={characters} />
    </React.Fragment>
  );
};

export default Home;
