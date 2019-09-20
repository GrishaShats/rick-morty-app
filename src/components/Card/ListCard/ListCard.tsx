import React from 'react';

import CharacterCard from 'components/Card/CharacterCard';
import FilterCard from 'components/Card/FilterCard';

import { CardItemType } from 'types';
import './ListCard.scss';

interface HomeWrapperProps {
  characters: CardItemType[];
}

interface State {
  characters: CardItemType[] | null;
  // characters: any;
}

export default class HomeWrapper extends React.Component<HomeWrapperProps, State> {
  constructor(props: HomeWrapperProps) {
    super(props);
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

  getFilteredCharacters = (filteredCharacters: CardItemType[]): void => {
    this.setState({
      characters: filteredCharacters,
    })
  }

  // deleteCat = () => {
  //   this.props.actions.deleteCat(this.props.characters)
  // }

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
                character={item} />
            )
          }
        </div>
      </React.Fragment>
    )
  }
};