import * as React from 'react';
import Header from 'components/Header/Header';
import HomeWrapper from 'components/HomeWrapper/HomeWrapper'
import { CardItem } from 'types'

type HomeWrapperProps = {
  characters: CardItem[];
}

const Home: React.FC<HomeWrapperProps> = ({ characters }) => {
  return (
    <React.Fragment>
      <Header />
      <HomeWrapper characters={characters} />
    </React.Fragment>
  );
};

export default Home;