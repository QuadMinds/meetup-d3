/* eslint-disable react/jsx-filename-extension,no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import chartApp from './modules';
import mySaga from './sagas/UpdateSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  chartApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
