import React from 'react';

import { styled } from 'theme';

import CharacterCard from 'components/Card/CharacterCard';
import { HandleDeleteCharacter, CardItemType } from 'store/domains';

const Wrapper = styled.div`
  margin: 0 150px 0 150px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

interface ListCardProps {
  characters: CardItemType[];
  handleDeleteCharacter: HandleDeleteCharacter;
}

const ListCard: React.FC<ListCardProps> = ({
  characters,
  handleDeleteCharacter }) => {
  return (
    <React.Fragment >
      <Wrapper>
        {
          characters && characters.map(item =>
            <CharacterCard key={item.id}
              id={item.id || 0}
              image={item.image || ''}
              name={item.name || ''}
              status={item.status || ''}
              species={item.species || ''}
              handleDeleteCharacter={() => handleDeleteCharacter(item.id || 0)} />,
          )
        }
      </Wrapper >
    </React.Fragment >
  );
}

export default ListCard;
