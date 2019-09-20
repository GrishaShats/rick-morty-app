import { apiClientService } from 'services';

export const getCharacters = () => apiClientService.get('character');

export const getFilterCharacters = (firstQuery: string, queryValue: string) =>
  apiClientService.get(`character?${firstQuery}=${queryValue}`);
