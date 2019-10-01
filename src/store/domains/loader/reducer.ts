import { Action } from 'redux';

export interface LoaderState {
  [key: string]: boolean;
}

const loadingReducer = (state: LoaderState = {}, { type }: Action) => {
  const matches = /(.*)_(PENDING|FULFILLED|REJECTED)/.exec(type);
  if (!matches) {
    return state;
  }
  const [, requestName, requestState] = matches;
  return {
    ...state,
    [requestName]: requestState === 'PENDING',
  };
};

export default loadingReducer;
