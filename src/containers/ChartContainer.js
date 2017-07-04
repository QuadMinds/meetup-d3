import { connect } from 'react-redux';
import { showTooltip, hideTooltip } from '../modules/ChartModule';
import LineChart from '../components/LineChart';

const mapStateToProps = (state, ownProps) => ({
  data: state.data,
  width: ownProps.w,
  toolTip: {
    hidden: state.toolTip.hidden,
    position: state.toolTip.position,
    data: state.toolTip.data,
  },
});

const mapDispatchToProps = dispatch => ({
  dotOnHover: (dot) => {
    dispatch(showTooltip(dot));
  },
  dotOnMouseOff: (dot) => {
    dispatch(hideTooltip(dot));
  },
});

const Chart = connect(mapStateToProps, mapDispatchToProps)(LineChart);

export default Chart;
