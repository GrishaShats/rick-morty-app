import {
  ActionTypeKeys,
  GetOneManagerAction,
} from './actionTypes';
import { Thunk } from 'types';
import { ManagerCredentials } from './types';

import { storage } from 'services';

export type GetOneManager = () => GetOneManagerAction;
export type HandleGetOneManager = () =>
  Thunk<Promise<void>> | void;

export type HandleSetOneManager = (value: ManagerCredentials) =>
  Thunk<Promise<void>> | void;

export const getOneManager = () => ({
  type: ActionTypeKeys.GET_ONE_MANAGER,
  payload: {
    token: storage.get('token'),
    name: storage.get('name'),
  },
});

export const handleGetOneManager: HandleGetOneManager = () =>
  async dispatch => {
    try {
      await dispatch(getOneManager());
    } catch (error) {
      return Promise.reject(error);
    }
  };


export const handleSetOneManager: HandleSetOneManager = value =>
  async () => {
    try {
      await storage.setInLocal(value);
    } catch (error) {
      return Promise.reject(error);
    }
  };
