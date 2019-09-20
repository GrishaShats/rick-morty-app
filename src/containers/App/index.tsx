import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import App from './view';

import { StoreState } from 'store/StoreState';

import {
  handleGettingAllCharacters,

  selectCharacterInfo,
} from 'store/domains/characters';

const mapStateToProps = (state: StoreState) => ({
  characters: selectCharacterInfo(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    handleGettingAllCharacters,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
