import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Home from './view';

import { StoreState } from 'store/StoreState';

import {
  createLoadingSelector,

  CharactersActionTypeKeys,

  handleGettingAllCharacters,
  handleDeleteCharacter,

  selectCharactersInfo,
} from 'store/domains';

const loadingSelector = createLoadingSelector([
  CharactersActionTypeKeys.GET_ALL_CHARACTERS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  characters: selectCharactersInfo(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    handleDeleteCharacter,
    handleGettingAllCharacters,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
