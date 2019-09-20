import { CharactersInfo } from './types';
import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_ALL_CHARACTERS = 'characters/GET_ALL_CHARACTERS',
  GET_ALL_CHARACTERS_FULFILLED = 'characters/GET_ALL_CHARACTERS_FULFILLED',
  GET_ALL_CHARACTERS_REJECTED = 'characters/GET_ALL_CHARACTERS_REJECTED',

  DELETE_CHARACTER = 'characters/DELETE_CHARACTER',
  DELETE_CHARACTER_FULFILLED = 'characters/DELETE_CHARACTER_FULFILLED',
  DELETE_CHARACTER_REJECTED = 'characters/DELETE_CHARACTER_REJECTED',
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

export interface DeleteCharacterAction {
  readonly value: number;
  readonly type: ActionTypeKeys.DELETE_CHARACTER;
}

export interface DeleteCharacterFulfilledAction {
  readonly value: number;
  readonly type: ActionTypeKeys.DELETE_CHARACTER_FULFILLED;
}

export interface DeleteCharacterRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.DELETE_CHARACTER_REJECTED;
}

export type CharactersActionTypes =
  | GetAllCharactersAction
  | GetAllCharactersFulfilledAction
  | GetAllCharactersRejectedAction
  | DeleteCharacterAction
  | DeleteCharacterFulfilledAction
  | DeleteCharacterRejectedAction;
