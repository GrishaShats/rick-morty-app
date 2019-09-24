export interface CardNameUrl {
  name: string;
  url: string;
}

export interface CardItemType {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: CardNameUrl;
  location?: CardNameUrl;
  image?: string;
  episode?: string[];
}

export interface CharacterMessageState {
  message: string;
}

export interface CharactersInfo {
  info: object;
  results: CardItemType[];
}

// export interface CharacterOverview {
//   characterOverview: CardItemType;
// }

export interface CharactersState {
  data: CharactersInfo;
  characterOverview: CardItemType;
}
