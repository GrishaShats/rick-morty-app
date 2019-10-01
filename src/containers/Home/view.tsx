import * as React from 'react';

import Header from 'components/Header';
import ListCard from 'components/Card/ListCard';

import {
  CardItemType,
  HandleDeleteCharacter,
  HandleFilterCharacters,
  HandleSetInitialForm,
  HandleToggleModal,
  HandleUpdateOneCharacter,
} from 'store/domains';

import { InputFieldType } from 'types';
import { withSpinner } from 'components/Spinner/withSpinner';

interface HomeProps {
  characters: CardItemType[];
  isLoading: boolean;
  isModalOpen: boolean;
  filterSelectOptions: InputFieldType[];
  handleDeleteCharacter: HandleDeleteCharacter;
  handleFilterCharacters: HandleFilterCharacters;
  handleSetInitialForm: HandleSetInitialForm;
  handleToggleModal: HandleToggleModal;
  handleUpdateOneCharacter: HandleUpdateOneCharacter;
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
