import React from 'react';

import { getFilterCharacters } from 'store/domains/characters/api';
import { CardItemType } from 'types';
import './FilterCard.scss';

interface State {
  selectValue: string;
  inputValue: string;
  characters: CardItemType[];
}

interface Props {
  onCharactersChange: any;
}

export default class FilterCard extends React.Component<Props, State> {
  state = {
    selectValue: 'name',
    inputValue: '',
    characters: [],
  };

  handleChange = (event: any): void => {
    const target = event.target;
    if (target.name === 'select') {
      this.setState({
        selectValue: target.value,
      });
    } else if (target.name === 'input') {
      this.setState({
        inputValue: target.value,
      });
    }
  }

  handleSubmit = (event: any): void => {
    const selectValue = this.state.selectValue.toLowerCase();
    const inputValue = this.state.inputValue;
    getFilterCharacters(selectValue, inputValue).then((res) => {
      this.props.onCharactersChange(JSON.parse(JSON.stringify(res)).results);
    });

    event.preventDefault();
  }

  render() {
    const inputValue = this.state.inputValue;
    const selectValue = this.state.selectValue;
    return (
      <form onSubmit={this.handleSubmit}>
        <select
          name="select"
          value={selectValue}
          onChange={this.handleChange}>
          <option value="Name">Name</option>
          <option value="Status">Status</option>
          <option value="Species">Species</option>
          <option value="Type">Type</option>
          <option value="Gender">Gender</option>
        </select>
        <input name="input" type="text" value={inputValue} onChange={this.handleChange} />
        <input type="submit" value="Send" />
      </form>
    );
  }
}
