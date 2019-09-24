import { CharactersState, CardItemType } from './domains/characters';
import { LoaderState } from './domains/loader';

export interface StoreState {
  characters: CharactersState;
  loader: LoaderState;
}
