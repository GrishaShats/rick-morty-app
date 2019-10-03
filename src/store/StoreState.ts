import { CharactersState } from './domains/characters';
import { LoaderState } from './domains/loader';
import { ModalState } from './domains/modal';
import { ManagerState } from './domains';

export interface StoreState {
  characters: CharactersState;
  manager: ManagerState;
  loader: LoaderState;
  modal: ModalState;
}
