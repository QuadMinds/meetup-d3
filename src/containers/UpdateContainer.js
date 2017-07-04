import { connect } from 'react-redux';
import { updateRequest } from '../modules/UpdateModule';
import UpdateButton from '../components/UpdateButton';

const mapStateToProps = state => (state);

const mapDispatchToProps = dispatch => ({
  onClickUpdate: () => {
    dispatch(updateRequest());
  },
});

const Update = connect(mapStateToProps, mapDispatchToProps)(UpdateButton);

export default Update;
