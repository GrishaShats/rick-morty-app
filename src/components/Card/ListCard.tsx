import React from 'react';

import { styled } from 'theme';

import CharacterCard from 'components/Card/CharacterCard';
import {
  HandleDeleteCharacter,
  HandleToggleModal,
  CardItemType,
  HandleSetInitialForm,
  HandleUpdateOneCharacter,
  HandleFilterCharacters,
} from 'store/domains';


import { InputFieldType } from 'types';
import UpdateCard from './UpdateCard';
import FilterCard from './FilterCard';

const Wrapper = styled.div`
  margin: 0 150px 0 150px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  .card-list {
    display: flex;
    flex-flow: row wrap;
  }

`;

interface ListCardProps {
  characters: CardItemType[];
  isModalOpen: boolean;
  filterSelectOptions: InputFieldType[];
  handleUpdateOneCharacter: HandleUpdateOneCharacter;
  handleDeleteCharacter: HandleDeleteCharacter;
  handleToggleModal: HandleToggleModal;
  handleSetInitialForm: HandleSetInitialForm;
  handleFilterCharacters: HandleFilterCharacters;
}

const ListCard: React.FC<ListCardProps> = ({
  characters,
  handleDeleteCharacter,
  handleUpdateOneCharacter,
  handleToggleModal,
  handleSetInitialForm,
  isModalOpen,
  handleFilterCharacters,
  filterSelectOptions }) => {
  return (
    <React.Fragment >
      <Wrapper>
        <FilterCard
          handleFilterCharacters={handleFilterCharacters}
          initialValues={{
            select: filterSelectOptions[0],
          }}
        />
        <div className="card-list">
          {
            characters && characters.map(item =>
              [
                <CharacterCard key={item.id}
                  id={item.id || 0}
                  image={item.image || ''}
                  name={item.name || ''}
                  status={item.status || ''}
                  species={item.species || ''}
                  handleToggleModal={handleToggleModal}
                  handleDeleteCharacter={() => handleDeleteCharacter(item.id || 0)}
                  handleSetInitialForm={() => handleSetInitialForm(item.id || 0)}
                />,
                <UpdateCard
                  title="Update card"
                  isModalOpen={isModalOpen}
                  onCancel={() => handleToggleModal(false)}
                  handleUpdateOneCharacter={handleUpdateOneCharacter}
                  handleToggleModal={handleToggleModal}
                />,
              ],
            )
          }
        </div>
      </Wrapper >
    </React.Fragment >
  );
};

export default ListCard;
