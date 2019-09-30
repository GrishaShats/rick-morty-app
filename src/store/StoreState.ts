import { CharactersState } from './domains/characters';
import { LoaderState } from './domains/loader';
import { ModalState } from './domains/modal';

export interface StoreState {
  characters: CharactersState;
  loader: LoaderState;
  modal: ModalState;
}
