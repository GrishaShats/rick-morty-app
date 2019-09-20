import * as api from './api';

import {
  ActionTypeKeys,
  GetAllCharactersAction,
  DeleteCharacterAction
} from './actionTypes';
import { Thunk, VoidPromiseThunk } from 'types';

export type GetAllCharacters = () => GetAllCharactersAction;
export type HandleGettingAllCharacters = VoidPromiseThunk;

export type DeleteCharacter = (value: number) => DeleteCharacterAction;
export type HandleDeleteCharacter = (value: number) =>
  Thunk<Promise<void>> | void;

export const getAllCharacters: GetAllCharacters = () => ({
  type: ActionTypeKeys.GET_ALL_CHARACTERS,
  payload: api.getCharacters(),
});

export const deleteCharacter = (value: number) => ({
  value,
  type: ActionTypeKeys.DELETE_CHARACTER,
});

export const handleGettingAllCharacters: HandleGettingAllCharacters = () =>
  async dispatch => {
    try {
      await dispatch(getAllCharacters());
    } catch (error) {
      return Promise.reject(error);
    }
  };

export const handleDeleteCharacter: HandleDeleteCharacter = value =>
  async dispatch => {
    try {
      await dispatch(getAllCharacters());
    } catch (error) {
      return Promise.reject(error);
    }
  };
