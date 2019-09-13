import { ApiClient } from './ApiClient';
import config from 'config'

export const apiClientService = new ApiClient(config.apiUrl);
