import { apiClientService } from 'services';

export const getCharacters = () => apiClientService.get('character');

export const getOne = (id: number) =>
  apiClientService.get(`character/${id}`);

export const getFilterCharacters = (firstQuery: string, queryValue: string) =>
  apiClientService.get(`character?${firstQuery}=${queryValue}`);

export const deleteCharacter = (id: number) =>
  apiClientService.delete(`character/${id}`);
