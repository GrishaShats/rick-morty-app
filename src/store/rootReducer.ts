import { History } from 'history';

import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux-seamless-immutable';

import charactersReducer from './domains/characters/reducer';

const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  characters: charactersReducer,
});

export default createRootReducer;
