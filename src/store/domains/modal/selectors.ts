import { StoreState } from 'store/StoreState';

export const selectIsOpenModal = (state: StoreState) => state.modal.showModal;
