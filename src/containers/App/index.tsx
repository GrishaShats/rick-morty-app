import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import App from './view';

import { StoreState } from 'store/StoreState';

import {
  createLoadingSelector,
  filterSelectOptions,

  CharactersActionTypeKeys,

  handleDeleteCharacter,
  handleFilterCharacters,
  handleGettingAllCharacters,
  handleSetInitialForm,
  handleToggleModal,
  handleUpdateOneCharacter,

  selectFilterCharacters,
  selectIsOpenModal,
} from 'store/domains';

const loadingSelector = createLoadingSelector([
  CharactersActionTypeKeys.GET_ALL_CHARACTERS,
]);

const mapStateToProps = (state: StoreState) => ({
  filterSelectOptions,
  isLoading: loadingSelector(state),
  characters: selectFilterCharacters(state),
  isModalOpen: selectIsOpenModal(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    handleDeleteCharacter,
    handleFilterCharacters,
    handleGettingAllCharacters,
    handleSetInitialForm,
    handleToggleModal,
    handleUpdateOneCharacter,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
