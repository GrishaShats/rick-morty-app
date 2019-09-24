import * as api from './api';

import {
  ActionTypeKeys,
  GetAllCharactersAction,
  GetOneCharacterAction,
  DeleteCharacterAction,
} from './actionTypes';
import { Thunk, VoidPromiseThunk } from 'types';

export type GetAllCharacters = () => GetAllCharactersAction;
export type HandleGettingAllCharacters = VoidPromiseThunk;

export type GetOneCharacter = (value: number) => GetOneCharacterAction;
export type HandleGetOneCharacter = (value: number) =>
  Thunk<Promise<void>> | void;

export type DeleteCharacter = (value: number) => DeleteCharacterAction;
export type HandleDeleteCharacter = (value: number) =>
  Thunk<Promise<void>> | void;

export const getAllCharacters: GetAllCharacters = () => ({
  type: ActionTypeKeys.GET_ALL_CHARACTERS,
  payload: api.getCharacters(),
});

export const getOneCharacter = (value: number) => ({
  type: ActionTypeKeys.GET_ONE_CHARACTER,
  payload: api.getOne(value),
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

export const handleGetOneCharacter: HandleGetOneCharacter = value =>
  async dispatch => {
    try {
      await dispatch(getOneCharacter(value));
    } catch (error) {
      return Promise.reject(error);
    }
  };

export const handleDeleteCharacter: HandleDeleteCharacter = value =>
  async dispatch => {
    try {
      await dispatch(deleteCharacter(value));
    } catch (error) {
      return Promise.reject(error);
    }
  };
