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
    default:
      return state;
  }
};

export default charactersReducer;
