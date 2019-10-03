import * as api from './api';
import { initialize } from 'redux-form';

import {
  ActionTypeKeys,
  GetAllCharactersAction,
  GetOneCharacterAction,
  UpdateCharacterAction,
  DeleteCharacterAction,
  SetCharacterFilterOptionAction,
} from './actionTypes';

import { InitialFormFieldsType, CardItemType, FilterInputField } from './types';
import { selectAllCharacters } from './selectors';

import { Thunk, VoidPromiseThunk } from 'types';


export type GetAllCharacters = () => GetAllCharactersAction;
export type HandleGettingAllCharacters = VoidPromiseThunk;

export type GetOneCharacter = (value: number) => GetOneCharacterAction;
export type HandleGetOneCharacter = (value: number) =>
  Thunk<Promise<void>> | void;

export type UpdateCharacter = (value: CardItemType) => UpdateCharacterAction;
export type HandleUpdateOneCharacter = (value: Partial<InitialFormFieldsType>) =>
  Thunk<Promise<void>> | void;

export type FilterCharacters = (value: FilterInputField) =>
  SetCharacterFilterOptionAction;
export type HandleFilterCharacters = (value: FilterInputField) =>
  Thunk<Promise<void>> | void;

export type DeleteCharacter = (value: number) => DeleteCharacterAction;
export type HandleDeleteCharacter = (value: number) =>
  Thunk<Promise<void>> | void;

export type HandleSetInitialForm = (value: number) =>
  Thunk<Promise<void>> | void;

export const getAllCharacters: GetAllCharacters = () => ({
  type: ActionTypeKeys.GET_ALL_CHARACTERS,
  payload: api.getCharacters(),
});

export const getOneCharacter = (id: number) => ({
  type: ActionTypeKeys.GET_ONE_CHARACTER,
  payload: api.getOne(id),
});

export const updateCharacter = (value: CardItemType) => ({
  value,
  type: ActionTypeKeys.UPDATE_CHARACTER,
});

export const filterCharacter = (value: FilterInputField) => ({
  value,
  type: ActionTypeKeys.FILTER_CHARACTERS,
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

export const handleGetOneCharacter: HandleGetOneCharacter = id =>
  async dispatch => {
    try {
      await dispatch(getOneCharacter(id));
    } catch (error) {
      return Promise.reject(error);
    }
  };

export const handleFilterCharacters: HandleFilterCharacters = (value: FilterInputField) =>
  async dispatch => {
    try {
      await dispatch(filterCharacter(value));
    } catch (error) {
      return Promise.reject(error);
    }
  };

export const handleUpdateOneCharacter: HandleUpdateOneCharacter = value =>
  async (dispatch, getState) => {
    try {
      const state = getState();
      const characters = selectAllCharacters(state);
      const character = characters.find(item => item.id === value.id);
      const newCharacter = {
        id: character.id,
        name: character.name,
        status: value.status,
        species: value.species,
        type: value.type,
        gender: value.gender,
        origin: character.origin,
        location: character.location,
        image: character.image,
        episode: character.episode,
      }
      await dispatch(updateCharacter(newCharacter));
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

export const handleSetInitialForm: HandleSetInitialForm = value =>
  async (dispatch, getState) => {
    try {
      const state = getState();
      const characters = selectAllCharacters(state);
      const character =
        characters.find(item => item.id === value);
      const data = {
        id: character.id,
        status: character.status,
        species: character.species,
        type: character.type || 'unknown',
      };
      await dispatch(initialize('updateCard', data));
    } catch (error) {
      return Promise.reject(error);
    }
  };
