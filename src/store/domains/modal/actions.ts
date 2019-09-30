import { ActionTypeKeys, ToggleModal } from './actionTypes';
import { Thunk } from 'types';

export type ToggleModalAction = (value: boolean) => ToggleModal;
export type HandleToggleModal = (value: boolean) =>
  Thunk<Promise<void>> | void;

export const toggleModalAction: ToggleModalAction = value => ({
  value,
  type: ActionTypeKeys.TOGGLE_MODAL,
});

export const handleToggleModal: HandleToggleModal = value =>
  async dispatch => {
    try {
      await dispatch(toggleModalAction(value));
    } catch (error) {
      return Promise.reject(error);
    }
  };
