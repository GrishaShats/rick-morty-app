import * as React from 'react';

import { styled } from 'theme';

import CharacterCard from 'components/Card/CharacterCard';
import CharacterInfo from 'components/CharacterInfo';

import { CardItemType, HandleGetOneCharacter } from 'store/domains';
import { Flex } from '@rebass/grid';

interface CharacterPageProps {
  match: any;
  character: CardItemType;
  handleGetOneCharacter: HandleGetOneCharacter;
}

const CharacterPage: React.FC<CharacterPageProps> = ({
  match,
  character,
  handleGetOneCharacter }) => {
  React.useEffect(() => {
    handleGetOneCharacter(match.params.id);
  }, [])
  return (
    <Flex flexWrap="wrap" justifyContent="center" m={25}>
      <CharacterCard
        id={character.id || 0}
        image={character.image || ''}
        name={character.name || ''}
        status={character.status || ''}
        species={character.species || ''}
      />
      <CharacterInfo
        type={character.type || ''}
        gender={character.gender || ''}
        origin={character.origin && character.origin.name || ''}
        location={character.location && character.location.name || ''}
        episode={character.episode && character.episode.length > 0 && character.episode[0] || ''}
      />
    </Flex>
  );
};

export default CharacterPage;
