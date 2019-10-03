import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import CharacterManager from './view';

import { StoreState } from 'store/StoreState';

import {
  handleGetOneManager,
  handleSetOneManager,

  selectOneManagerInfo,
} from 'store/domains';

const mapStateToProps = (state: StoreState) => ({
  managerInfo: selectOneManagerInfo(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    handleGetOneManager,
    handleSetOneManager,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CharacterManager);
