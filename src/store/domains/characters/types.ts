import { FilterOptionConsts } from "./consts";

export interface CardNameUrl {
  name: string;
  url: string;
}

export interface CardItemType {
  id: number;
  name: string;
  status: string;
  species: string;
  type?: string;
  gender?: string;
  origin?: CardNameUrl;
  location?: CardNameUrl;
  image?: string;
  episode?: string[];
}

export interface CharactersInfoType {
  count: number;
}

export interface CartoonInfoType {
  charactersAmount: number;
  locationsAmount: number;
  episodesAmount: number;
}

export interface InitialFormFieldsType {
  id: number;
  status: string;
  species: string;
  type: string;
  gender: string;
}

export interface FilterInputField {
  type: string;
  inputValue: string;
}

export interface FilterFormFieldsType<TSelect = keyof Omit<CardItemType, 'id' | 'origin' | 'location'>> {
  select: TSelect;
  input: keyof CardItemType;
}

export interface CharactersInfo {
  info: CharactersInfoType;
  results: CardItemType[];
}

export interface CharacterFilterOptions {
  [FilterOptionConsts.TYPE_PROP]: keyof Omit<CardItemType, 'id' | 'origin' | 'location'> | '';
  [FilterOptionConsts.VALUE_PROP]: string;
}

export interface CharactersState {
  data: CharactersInfo;
  characterOverview: CardItemType;
  filterOptions: CharacterFilterOptions;
}
