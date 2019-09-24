import * as React from 'react';

import Header from 'components/Header';
import ListCard from 'components/Card/ListCard';

import { HandleGettingAllCharacters, HandleDeleteCharacter, CardItemType } from 'store/domains';
import { Spinner } from 'components/Spinner/Spinner';
import { withSpinner } from 'components/Spinner/withSpinner';
import { theme } from 'theme';

interface HomeProps {
  characters: CardItemType[];
  isLoading: boolean;
  handleGettingAllCharacters: HandleGettingAllCharacters;
  handleDeleteCharacter: HandleDeleteCharacter;
}

const LoadingListCard = withSpinner()(ListCard);

const Home: React.FC<HomeProps> = ({
  characters,
  isLoading,
  handleGettingAllCharacters,
  handleDeleteCharacter }) => {
  React.useEffect(() => {
    handleGettingAllCharacters();
  }, [])
  return (
    <div>
      <Header />
      <LoadingListCard
        isLoading={isLoading}
        characters={characters}
        handleDeleteCharacter={handleDeleteCharacter} />
    </div>
  );
};

export default (Home);
