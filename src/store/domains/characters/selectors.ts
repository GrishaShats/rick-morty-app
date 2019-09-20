import { StoreState } from 'store/StoreState';

export const selectCharacterInfo = (state: StoreState) => state.characters.data.results;
