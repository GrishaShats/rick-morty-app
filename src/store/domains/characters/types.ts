import { CardItemType } from 'types';

export interface CharacterMessageState {
  message: string;
}

export interface CharactersInfo {
  info: object;
  results: CardItemType[];
}

export interface CharactersState {
  data: CharactersInfo;
}
