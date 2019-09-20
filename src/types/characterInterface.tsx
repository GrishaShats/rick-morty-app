export interface CardNameUrl {
  name: string;
  url: string;
}

export interface CardItemType {
  id: number;
  name: string;
  status: string;
  species: string;
  gender?: string;
  origin?: CardNameUrl;
  location?: CardNameUrl;
  image?: string;
  episode: [];
}
