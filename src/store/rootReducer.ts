import { History } from 'history';
import { reducer as formReducer } from 'redux-form';

import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux-seamless-immutable';

import charactersReducer from './domains/characters/reducer';
import loadingReducer from './domains/loader/reducer';
import modalReducer from './domains/modal/reducer';

const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  characters: charactersReducer,
  loader: loadingReducer,
  form: formReducer,
  modal: modalReducer,
});

export default createRootReducer;
