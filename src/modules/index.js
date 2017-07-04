import { combineReducers } from 'redux';
import { toolTip } from './ChartModule';
import { data } from './UpdateModule';

const chartApp = combineReducers({ data, toolTip });

export default chartApp;
