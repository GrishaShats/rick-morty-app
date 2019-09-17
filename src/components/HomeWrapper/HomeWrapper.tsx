import React from 'react';

import { CardItem } from 'types';
import CharacterCard from 'components/CharacterCard/CharacterCard';
import FilterCard from 'components/FilterCard/FilterCard';

import './HomeWrapper.scss';

type HomeWrapperProps = {
  characters: CardItem[];
}

interface State {
  characters: CardItem[] | null;
  // characters: any;
};

export default class HomeWrapper extends React.Component<HomeWrapperProps, State> {
  constructor(props: HomeWrapperProps) {
    super(props);
    console.log(this.props.characters, 'construct');
    this.state = {
      characters: null,
    }
  }

  componentDidUpdate(prevProps: HomeWrapperProps) {
    if (prevProps.characters !== this.props.characters && !this.state.characters) {
      this.setState({
        characters: this.props.characters,
      });
    }
  }

  getFilteredCharacters = (filteredCharacters: CardItem[]): void => {
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
            characters && characters.map((item: CardItem) =>
              <CharacterCard key={item.id}
                character={item} />
            )
          }
        </div>
      </React.Fragment>
    )
  }
};