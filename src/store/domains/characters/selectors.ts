import { StoreState } from 'store/StoreState';
import { createSelector } from 'reselect';
import { FilterOptionConsts } from './consts';

export const selectAllCharacters = (state: StoreState) => state.characters.data.results;

export const selectCharactersInfo = (state: StoreState) => state.characters.data.info;

export const selectOneCharacterInfo = (state: StoreState) => state.characters.characterOverview;

export const selectTypeFilterOption = (state: StoreState) =>
  state.characters.filterOptions[FilterOptionConsts.TYPE_PROP];

export const selectValueFilterOption = (state: StoreState) =>
  state.characters.filterOptions[FilterOptionConsts.VALUE_PROP];

export const selectFilterCharacters = createSelector(
  selectAllCharacters,
  selectTypeFilterOption,
  selectValueFilterOption,
  (characters, typeFilterOption, valueFilterOption) => {
    if (typeFilterOption && valueFilterOption) {
      return characters.filter(item => item[typeFilterOption].includes(valueFilterOption));
    }
    return characters;
  },
);
