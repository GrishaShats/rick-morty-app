import { StoreState } from 'store/StoreState';

export const selectOneManagerInfo = (state: StoreState) => state.manager.data;
