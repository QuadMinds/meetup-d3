import React from 'react';
import PropTypes from 'prop-types';

const UpdateButton = props => (
  <button onClick={props.onClickUpdate}>{props.text}</button>
)

UpdateButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClickUpdate: PropTypes.func.isRequired,
};

export default UpdateButton;
