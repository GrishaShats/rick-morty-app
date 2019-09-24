import { CharactersInfo, CardItemType } from './types';
import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_ALL_CHARACTERS = 'characters/GET_ALL_CHARACTERS',
  GET_ALL_CHARACTERS_FULFILLED = 'characters/GET_ALL_CHARACTERS_FULFILLED',
  GET_ALL_CHARACTERS_REJECTED = 'characters/GET_ALL_CHARACTERS_REJECTED',

  GET_ONE_CHARACTER = 'characters/GET_ONE_CHARACTER',
  GET_ONE_CHARACTER_FULFILLED = 'characters/GET_ONE_CHARACTER_FULFILLED',
  GET_ONE_CHARACTER_REJECTED = 'characters/GET_ONE_CHARACTER_REJECTED',

  DELETE_CHARACTER = 'characters/DELETE_CHARACTER',
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

export interface DeleteCharacterAction {
  readonly value: number;
  readonly type: ActionTypeKeys.DELETE_CHARACTER;
}

export type CharactersActionTypes =
  | GetAllCharactersAction
  | GetAllCharactersFulfilledAction
  | GetAllCharactersRejectedAction
  | DeleteCharacterAction
  | GetOneCharacterAction
  | GetOneCharacterFulfilledAction
  | GetOneCharacterRejectedAction;
