import React from 'react';
import { Flex, Box } from '@rebass/grid';

import { styled } from 'theme';

import {
  CardItemType,
  HandleSetInitialForm,
  HandleDeleteCharacter,
  HandleFilterCharacters,
  HandleToggleModal,
  HandleUpdateOneCharacter,
} from 'store/domains';

import CharacterCard from './CharacterCard';
import FilterCard from './FilterCard';
import UpdateCard from './UpdateCard';

import { InputFieldType } from 'types'


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
      <Flex flexDirection="column" width={["218px", , , 0.75]} mr="auto" ml="auto">
        <Box>
          <FilterCard
            handleFilterCharacters={handleFilterCharacters}
            initialValues={{
              select: filterSelectOptions[0],
            }}
          />
        </Box>
        <Box>
          <Flex flexWrap="wrap" justifyContent="space-between">
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
          </Flex>
        </Box>
      </Flex>
    </React.Fragment >
  );
};

export default ListCard;
