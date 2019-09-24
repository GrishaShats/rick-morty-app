import { History } from 'history';

import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux-seamless-immutable';

import charactersReducer from './domains/characters/reducer';
import loadingReducer from './domains/loader/reducer';

const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  characters: charactersReducer,
  loader: loadingReducer,
});

export default createRootReducer;
