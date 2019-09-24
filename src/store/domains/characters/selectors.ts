import { StoreState } from 'store/StoreState';

export const selectCharactersInfo = (state: StoreState) => state.characters.data.results;

export const selectOneCharacterInfo = (state: StoreState) => state.characters.characterOverview;
