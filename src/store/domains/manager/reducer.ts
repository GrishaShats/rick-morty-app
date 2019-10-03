import Immutable from 'seamless-immutable';
import { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, ManagerActionTypes } from './actionTypes';
import { ManagerState } from './types';
import { storage } from 'services';

export const managerInitialState: ImmutableObject<ManagerState> = Immutable({
  data: {
    token: '',
    name: '',
  },
});

const managerReducer = (
  state: ImmutableObject<ManagerState> = managerInitialState,
  action: ManagerActionTypes,
) => {
  switch (action.type) {
    case ActionTypeKeys.GET_ONE_MANAGER: {
      return state.set('data', action.payload);
    }

    default:
      return state;
  }
};

export default managerReducer;
