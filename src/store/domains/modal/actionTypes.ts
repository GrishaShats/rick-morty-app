export enum ActionTypeKeys {
  TOGGLE_MODAL = 'modal/TOGGLE_MODAL',
}

export interface ToggleModal {
  value: boolean;
  readonly type: ActionTypeKeys.TOGGLE_MODAL;
}

export type ModalActionTypes =
  | ToggleModal;
