import Immutable from 'seamless-immutable';
import { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, CharactersActionTypes } from './actionTypes';
import { CharactersState } from './types';
import { FilterOptionConsts } from './consts';

export const charactersInitialState: ImmutableObject<CharactersState> = Immutable({
  data: {
    info: {
      count: 0,
    },
    results: [],
  },
  characterOverview: {},
  filterOptions: {
    [FilterOptionConsts.TYPE_PROP]: 'name',
    [FilterOptionConsts.VALUE_PROP]: '',
  },
});

const charactersReducer = (
  state: ImmutableObject<CharactersState> = charactersInitialState,
  action: CharactersActionTypes,
) => {
  switch (action.type) {
    case ActionTypeKeys.GET_ALL_CHARACTERS_FULFILLED:
      return state.set('data', action.payload);
    case ActionTypeKeys.GET_ONE_CHARACTER_FULFILLED:
      return state.set('characterOverview', action.payload);
    case ActionTypeKeys.UPDATE_CHARACTER: {
      const data = state.data.results.map(item =>
        item.id === action.value.id ? action.value : item,
      );
      return state.setIn(['data', 'results'], data);
    }
    case ActionTypeKeys.FILTER_CHARACTERS: {
      return state.setIn(['filterOptions', action.value.type], action.value.inputValue);
    }
    case ActionTypeKeys.DELETE_CHARACTER: {
      const data = state.data.results.filter(item => item.id !== action.value);
      return state.setIn(['data', 'results'], data);
    }

    default:
      return state;
  }
};

export default charactersReducer;
