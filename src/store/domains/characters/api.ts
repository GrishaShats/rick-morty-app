import { apiClientService } from 'services';

export const getCharacters = () => apiClientService.get('character', {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});
