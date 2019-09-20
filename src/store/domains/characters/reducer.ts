import Immutable from 'seamless-immutable';
import { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, CharactersActionTypes } from './actionTypes';

import { CharactersState } from './types';

export const charactersInitialState: ImmutableObject<CharactersState> = Immutable({
  data: {
    info: {},
    results: [],
  },
});

const charactersReducer = (
  state: ImmutableObject<CharactersState> = charactersInitialState,
  action: CharactersActionTypes,
) => {
  switch (action.type) {
    case ActionTypeKeys.GET_ALL_CHARACTERS_FULFILLED:
      return state.set('data', action.payload);
    case ActionTypeKeys.DELETE_CHARACTER_FULFILLED: {
      const data = state.data.results.filter(item => item.id !== action.value);
      return state.setIn(['data', 'results'], data);
    }
    default:
      return state;
  }
};

export default charactersReducer;
