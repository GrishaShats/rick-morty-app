import { ThunkAction } from 'redux-thunk';
import { Action, AnyAction } from 'redux';
import { Response as SuperagentApiResponse } from 'superagent';

import { StoreState } from 'store/StoreState';

export type Thunk<R> = ThunkAction<R, StoreState, {}, AnyAction>;

export type VoidPromiseThunk = () => Thunk<Promise<void>>;
export type VoidThunk = () => Thunk<void>;

export type ApiResponse = SuperagentApiResponse;
