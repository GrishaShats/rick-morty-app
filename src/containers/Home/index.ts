import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Home from './view';

import { StoreState } from 'store/StoreState';

import {
  handleGettingAllCharacters,
  handleDeleteCharacter,

  selectCharacterInfo,
} from 'store/domains/characters';

const mapStateToProps = (state: StoreState) => ({
  characters: selectCharacterInfo(state),
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
