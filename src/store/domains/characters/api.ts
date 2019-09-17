import { apiClientService } from 'services';

export const getCharacters = () => apiClientService.get('character', {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

export const getFilterCharacters = (firstQuery: string, queryValue: string) =>
    apiClientService.get(`character?${firstQuery}=${queryValue}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });
