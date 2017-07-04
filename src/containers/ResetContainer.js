import { connect } from 'react-redux';
import { resetRequest } from '../modules/ResetModule';
import UpdateButton from '../components/UpdateButton';

const mapStateToProps = state => (state);

const mapDispatchToProps = dispatch => ({
  onClickUpdate: () => {
    dispatch(resetRequest());
  },
});

const Reset = connect(mapStateToProps, mapDispatchToProps)(UpdateButton);

export default Reset;
