import { ApiClient } from './ApiClient';
import { Storage } from './storage';
import config from 'config/development'

export const apiClientService = new ApiClient(config.apiUrl);

export const storage = new Storage();
