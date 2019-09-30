import { apiClientService } from 'services';
import { CardItemType } from './types';

export const getCharacters = () => apiClientService.get('character');

export const getOne = (id: number) =>
  apiClientService.get(`character/${id}`);

export const updateOneCharacter = (data: CardItemType) =>
  apiClientService.put('character', { data });
