export interface CardItem {
  id: number,
  name: string,
  status: string,
  species: string,
  gender?: string,
  origin?: object,
  location?: object,
  img?: string,
  episode: [],
}