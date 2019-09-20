import { ApiClient } from './ApiClient';
import config from 'config/development'

export const apiClientService = new ApiClient(config.apiUrl);
