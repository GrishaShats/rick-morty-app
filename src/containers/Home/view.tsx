import * as React from 'react';
import Header from 'components/Header/Header';
import CharacterCard from 'components/CharacterCard/CharacterCard';
import { CardItem } from 'types'

type HomeProps = {
  characters: CardItem[];
}

const Home: React.StatelessComponent<HomeProps> = (props: any) => {
  const characters = props.characters;
  return (
    <>
      <Header />
      {characters.map((item: CardItem) =>
        <CharacterCard key={item.id}
          character={item} />
      )}
    </>
  );
};

export default Home;