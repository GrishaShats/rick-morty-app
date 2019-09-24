import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import CharacterPage from './view';

import { StoreState } from 'store/StoreState';

import {
  handleGetOneCharacter,

  selectOneCharacterInfo,
} from 'store/domains/characters';

const mapStateToProps = (state: StoreState) => ({
  character: selectOneCharacterInfo(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    handleGetOneCharacter,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CharacterPage);
