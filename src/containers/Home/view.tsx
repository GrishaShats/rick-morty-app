import * as React from 'react';

import Header from 'components/Header/Header';
import HomeWrapper from 'components/Card/ListCard/ListCard';

import { CardItemType } from 'types';

interface HomeWrapperProps {
  characters: CardItemType[];
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