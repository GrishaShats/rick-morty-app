import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, ModalActionTypes } from './actionTypes';

import { ModalState } from './types';

export const modalInitialState: ImmutableObject<ModalState> = Immutable({
  showModal: false,
});

const modalReducer = (
  state: ImmutableObject<ModalState> = modalInitialState,
  action: ModalActionTypes
) => {
  switch (action.type) {

    case ActionTypeKeys.TOGGLE_MODAL:
      return state.set('showModal', action.value);

    default: return state;
  }
};

export default modalReducer;
