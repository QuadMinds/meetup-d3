import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import './Axis.css';

class Axis extends React.Component {

  constructor(props) {
    super();
    this.props = props;
  }

  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    d3.select(this.node).call(this.props.axis);
  }

  render() {
    const transform = `translate(0, ${this.props.h})`;
    return (
      <g
        ref={node => this.node = node}
        className={`axis ${this.props.axisType}-axis`}
        transform={this.props.axisType === 'x' ? transform : ''}
      />
    );
  }
}

Axis.propTypes = {
  h: PropTypes.number.isRequired,
  axis: PropTypes.func.isRequired,
  axisType: PropTypes.oneOf(['x', 'y']).isRequired,
}

export default Axis;
