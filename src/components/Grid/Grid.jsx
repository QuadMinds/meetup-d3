import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import './Grid.css';

class Grid extends React.Component {

  constructor(props) {
    super();
    this.props = props;
  }

  componentDidMount() {
    this.renderGrid();
  }

  componentDidUpdate() {
    this.renderGrid();
  }

  renderGrid() {
    d3.select(this.node).call(this.props.grid);
  }

  render() {
    const translate = `translate(0, ${this.props.h})`;
    return (
      <g
        ref={node => this.node = node}
        className={this.props.gridType === 'x' ? 'x-grid' : 'y-grid'}
        transform={this.props.gridType === 'x' ? translate : ''}
      />
    );
  }
}

Grid.propTypes = {
  h: PropTypes.number,
  grid: PropTypes.func,
  gridType: PropTypes.oneOf(['x', 'y']),
};

export default Grid;
