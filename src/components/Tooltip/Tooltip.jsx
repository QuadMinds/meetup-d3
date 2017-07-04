import React from 'react';
import PropTypes from 'prop-types';
import './Tooltip.css';

class Tooltip extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    const height = 70;
    const width = 150;
    let transform = '';
    let transformArrow = '';
    let visibility = 'hidden';
    const transformText = `translate(${width / 2}, ${(height / 2) - 5})`;

    if (!this.props.hidden) {
      if (this.props.position.y > height) {
        transform = `translate(${(this.props.position.x - (width / 2))} ,${(this.props.position.y - height - 20)})`;
        transformArrow = `translate(${(width / 2) - 20} , ${height - 2})`;
      } else if (this.props.position.y < height) {
        transform = `translate(${(this.props.position.x - (width / 2))} ,${(Math.round(this.props.position.y) + 20)})`;
        transformArrow = `translate(${(width / 2) - 20} , 0) rotate(180, 20, 0)`;
      }
      visibility = 'visible';
    } else {
      visibility = 'hidden';
    }

    return (
      <g transform={transform}>
        <rect
          class="tooltip-background"
          is
          width={width}
          height={height}
          rx="10"
          ry="10"
          visibility={visibility}
        />
        <polygon
          class="tooltip-background"
          is
          points="10,0  30,0  20,10"
          transform={transformArrow}
          visibility={visibility}
        />
        <text is visibility={visibility} transform={transformText}>
          <tspan
            is
            x="0"
            text-anchor="middle"
            font-size="15px"
            fill="#ffffff"
          >
            {this.props.data.key}
          </tspan>
          <tspan
            is
            x="0"
            text-anchor="middle"
            dy="25"
            font-size="20px"
            fill="#a9f3ff"
          >
            {`${this.props.data.value} items`}
          </tspan>
        </text>
      </g>
    );
  }
}

Tooltip.propTypes = {
  hidden: PropTypes.bool.isRequired,
  data: PropTypes.shape({ data: PropTypes.string, value: PropTypes.string }).isRequired,
  position: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }).isRequired,
};

export default Tooltip;
