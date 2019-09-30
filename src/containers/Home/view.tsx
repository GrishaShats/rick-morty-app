import * as React from 'react';

import Header from 'components/Header';
import ListCard from 'components/Card/ListCard';

import {
  HandleSetInitialForm,
  HandleDeleteCharacter,
  HandleToggleModal,
  HandleUpdateOneCharacter,
  CardItemType,
  HandleFilterCharacters,
} from 'store/domains';

import { InputFieldType } from 'types';
import { withSpinner } from 'components/Spinner/withSpinner';

interface HomeProps {
  characters: CardItemType[];
  isLoading: boolean;
  handleUpdateOneCharacter: HandleUpdateOneCharacter;
  handleDeleteCharacter: HandleDeleteCharacter;
  handleToggleModal: HandleToggleModal;
  handleSetInitialForm: HandleSetInitialForm;
  handleFilterCharacters: HandleFilterCharacters;
  isModalOpen: boolean;
  filterSelectOptions: InputFieldType[];
}

const LoadingListCard = withSpinner()(ListCard);

const Home: React.FC<HomeProps> = ({
  characters,
  isLoading,
  handleUpdateOneCharacter,
  handleDeleteCharacter,
  handleToggleModal,
  handleSetInitialForm,
  handleFilterCharacters,
  isModalOpen,
  filterSelectOptions,
}) => {
  return (
    <div>
      <Header />
      <LoadingListCard
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
    </div>
  );
};

export default (Home);
