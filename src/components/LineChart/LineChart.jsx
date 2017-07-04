import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import './LineChart.css';
import Dots from '../Dots';
import Grid from '../Grid/Grid';
import Axis from '../Axis/Axis';
import Tooltip from '../Tooltip';
import Update from '../../containers/UpdateContainer';
import Reset from '../../containers/ResetContainer';


class LineChart extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    const data = this.props.data;
    const margin = { top: 5, right: 50, bottom: 20, left: 50 };
    const w = this.props.width - (margin.left + margin.right);
    const h = this.props.height - (margin.top + margin.bottom);

    // Parder de fechas
    const parseDate = d3.timeParse('%Y-%m-%d');

    data.forEach(d => d.date = parseDate(d.day));

    // Scaler de Tiempo
    const x = d3.scaleTime().domain(d3.extent(data, d => (d.date))).range([0, w]);

    // Scaler de Valores
    const y = d3.scaleLinear().domain([0, d3.max(data, d => (d.value))]).range([h, 0]);

    const line = d3.line()
      .x(d => (
        x(d.date)
      ))
      .y(d => (
        y(d.value)
      )).curve(d3.curveCardinal);

    // Compensar Margenes
    const transform = `translate(${margin.left},${margin.top})`;

    // Grilla
    const yGrid = d3.axisLeft(y)
      .ticks(5)
      .tickSize(-w, 0, 0)
      .tickFormat('');

    const xAxis = d3.axisBottom(x)
      .ticks(4)
      .tickValues(data.map(
        (d, i) => (
          i > 0 ? d.date : null
        )).splice(1));

    const yAxis = d3.axisLeft(y)
      .ticks(4);

    return (
      <div className="chart-container">
        <svg height={this.props.height} width={this.props.width} className="line-chart">
          <g transform={transform}>
            <Grid h={h} grid={yGrid} gridType="y" />
            <Axis h={h} axis={xAxis} axisType="x" />
            <Axis h={h} axis={yAxis} axisType="y" />
            <path className={'line shadow'} d={line(data)} strokeLinecap="round" />
            <Dots
              data={data}
              x={x}
              y={y}
              showTooltip={this.props.dotOnHover}
              hideTooltip={this.props.dotOnMouseOff}
            />
            <Tooltip {...this.props.toolTip} />
          </g>
        </svg>
        <Update text="Update" />
        <Reset text="Reset" />
      </div>
    );
  }
}

LineChart.defaultProps = {
  width: 800,
  height: 300,
  chartId: 'v1_chart',
};

LineChart.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  data: PropTypes.arrayOf(
    PropTypes.shape({ day: PropTypes.string, value: PropTypes.number })
  ).isRequired,
  dotOnHover: PropTypes.func.isRequired,
  dotOnMouseOff: PropTypes.func.isRequired,
  toolTip: PropTypes.shape({
    hidden: PropTypes.bool.isRequired,
    data: PropTypes.shape({ data: PropTypes.string, value: PropTypes.string }).isRequired,
    position: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }).isRequired,
  }).isRequired,
};

export default LineChart;
