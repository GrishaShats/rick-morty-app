import * as React from 'react';

import { styled } from 'theme';

import CharacterCard from 'components/Card/CharacterCard';
import CharacterInfo from 'components/CharacterInfo';

import { HandleGetOneCharacter, CardItemType } from 'store/domains';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 25px;
`;

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
    console.log(match, 'fuck');
    handleGetOneCharacter(match.params.id);
  }, [])
  return (
    <Wrapper>
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

    </Wrapper>
  );
};

export default CharacterPage;
