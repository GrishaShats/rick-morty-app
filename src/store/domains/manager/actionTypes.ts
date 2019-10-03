import { ManagerCredentials } from './types';

export enum ActionTypeKeys {
  GET_ONE_MANAGER = 'manager/GET_ONE_MANAGER',
}

export interface GetOneManagerAction {
  readonly payload: ManagerCredentials;
  readonly type: ActionTypeKeys.GET_ONE_MANAGER;
}

export type ManagerActionTypes =
  | GetOneManagerAction;
