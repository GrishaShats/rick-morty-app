import React from 'react';

import CharacterCard from 'components/Card/CharacterCard';
import FilterCard from 'components/Card/FilterCard';

import { CardItemType } from 'types';
import './ListCard.scss';

interface ListCardProps {
  characters: CardItemType[];
}

interface State {
  characters: CardItemType[] | null;
}

export default class ListCard extends React.Component<ListCardProps, State> {
  constructor(props: ListCardProps) {
    super(props);
    this.state = {
      characters: null,
    }
  }

  componentDidUpdate(prevProps: ListCardProps) {
    if (prevProps.characters !== this.props.characters && !this.state.characters) {
      this.setState({
        characters: this.props.characters,
      });
    }
  }

  getFilteredCharacters = (filteredCharacters: CardItemType[]): void => {
    this.setState({
      characters: filteredCharacters,
    })
  }

  render() {
    const { characters } = this.state;
    return (
      <React.Fragment>
        <FilterCard
          onCharactersChange={this.getFilteredCharacters} />
        <div className='cards-wrapper'>
          {
            characters && characters.map((item: CardItemType) =>
              <CharacterCard key={item.id}
                character={item} />,
            )
          }
        </div>
      </React.Fragment>
    );
  }
}
