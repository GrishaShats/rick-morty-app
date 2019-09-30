import { CharactersInfo, CardItemType, FilterInputField } from './types';
import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_ALL_CHARACTERS = 'characters/GET_ALL_CHARACTERS',
  GET_ALL_CHARACTERS_FULFILLED = 'characters/GET_ALL_CHARACTERS_FULFILLED',
  GET_ALL_CHARACTERS_REJECTED = 'characters/GET_ALL_CHARACTERS_REJECTED',

  GET_ONE_CHARACTER = 'characters/GET_ONE_CHARACTER',
  GET_ONE_CHARACTER_FULFILLED = 'characters/GET_ONE_CHARACTER_FULFILLED',
  GET_ONE_CHARACTER_REJECTED = 'characters/GET_ONE_CHARACTER_REJECTED',

  UPDATE_CHARACTER = 'characters/UPDATE_CHARACTER',

  FILTER_CHARACTERS = 'characters/FILTER_CHARACTERS',

  DELETE_CHARACTER = 'characters/DELETE_CHARACTER',

  SET_INITIAL_FORM = 'characters/SET_INITIAL_FORM',
}

export interface GetAllCharactersAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_ALL_CHARACTERS;
}

export interface GetAllCharactersFulfilledAction {
  readonly payload: CharactersInfo;
  readonly type: ActionTypeKeys.GET_ALL_CHARACTERS_FULFILLED;
}

export interface GetAllCharactersRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_ALL_CHARACTERS_REJECTED;
}

export interface GetOneCharacterAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_ONE_CHARACTER;
}

export interface GetOneCharacterFulfilledAction {
  readonly payload: CardItemType;
  readonly type: ActionTypeKeys.GET_ONE_CHARACTER_FULFILLED;
}

export interface GetOneCharacterRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_ONE_CHARACTER_REJECTED;
}

export interface UpdateCharacterAction {
  readonly value: CardItemType;
  readonly type: ActionTypeKeys.UPDATE_CHARACTER;
}

export interface SetCharacterFilterOptionAction {
  readonly value: FilterInputField;
  readonly type: ActionTypeKeys.FILTER_CHARACTERS;
}

export interface DeleteCharacterAction {
  readonly value: number;
  readonly type: ActionTypeKeys.DELETE_CHARACTER;
}

export interface SetInitialFormAction {
  readonly value: number;
  readonly type: ActionTypeKeys.SET_INITIAL_FORM;
}

export type CharactersActionTypes =
  | GetAllCharactersAction
  | GetAllCharactersFulfilledAction
  | GetAllCharactersRejectedAction
  | GetOneCharacterAction
  | GetOneCharacterFulfilledAction
  | GetOneCharacterRejectedAction
  | UpdateCharacterAction
  | DeleteCharacterAction
  | SetInitialFormAction
  | SetCharacterFilterOptionAction;
