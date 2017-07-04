import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import './Dots.css';

class Dots extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    const dateParser = d3.timeFormat('%b %e');

    const circles = this.props.data
      .map(
        (d, i) => (
          <circle
            key={i}
            className="dot"
            r="7"
            cx={this.props.x(d.date)}
            cy={this.props.y(d.value)}
            onMouseOver={this.props.showTooltip}
            onMouseOut={this.props.hideTooltip}
            data-key={dateParser(d.date)}
            data-value={d.value}
          />
        ),
      );

    return (
      <g>
        {circles}
      </g>
    );
  }
}

Dots.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  x: PropTypes.func.isRequired,
  y: PropTypes.func.isRequired,
  showTooltip: PropTypes.func.isRequired,
  hideTooltip: PropTypes.func.isRequired,
};

export default Dots;
