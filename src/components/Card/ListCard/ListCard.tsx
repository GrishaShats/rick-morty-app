import React from 'react';

import { styled } from 'theme';
// import { media, styled } from 'theme';

import CharacterCard from 'components/Card/CharacterCard/CharacterCard';
import FilterCard from 'components/Card/FilterCard/FilterCard';
import { HandleDeleteCharacter } from 'store/domains';

import { CardItemType } from 'types';

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

  // constructor(props: ListCardProps) {
  //   super(props);
  //   this.state = {
  //     characters: null,
  //   }
  // }

  // componentDidUpdate(prevProps: ListCardProps) {
  //   if (prevProps.characters !== this.props.characters && !this.state.characters) {
  //     this.setState({
  //       characters: this.props.characters,
  //     });
  //   }
  // }

  // getFilteredCharacters = (filteredCharacters: CardItemType[]): void => {
  //   this.setState({
  //     characters: filteredCharacters,
  //   })
  // }
  return (
    <React.Fragment >
      {/* <FilterCard
          onCharactersChange={this.getFilteredCharacters} /> */}
      <Wrapper>
        {
          characters && characters.map(item =>
            <CharacterCard key={item.id}
              image={item.image || ''}
              name={item.name}
              status={item.status}
              species={item.species}
              handleDeleteCharacter={() => handleDeleteCharacter(item.id)} />,
          )
        }
      </Wrapper >
    </React.Fragment >
  );
}

export default ListCard;

