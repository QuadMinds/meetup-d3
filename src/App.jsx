/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import logo from './assets/quadminds.png';
import Chart from './containers/ChartContainer';
import './App.css';

class App extends React.Component {
  render() {


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React D3 - Integration</h2>
        </div>
        <Chart data={[]} />
      </div>
    );
  }
}

export default App;
