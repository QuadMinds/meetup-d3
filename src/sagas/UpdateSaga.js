import { call, put, all, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchData() {
  try {
    const response = yield call(axios.get, 'http://delicate-rain-2342.getsandbox.com/data');
    const data = response.data;
    yield put({ type: 'UPDATE_DATA_SUCCESS', data });
  } catch (e) {
    console.log(e.message);
  }
}

function* resetData() {
  try {
    yield call(axios.get, 'http://delicate-rain-2342.getsandbox.com/reset');
    yield put({ type: 'RESET_DATA_SUCCESS' });
  } catch (e) {
    console.log(e.message);
  }
}

function* watchUpdateClicks() {
  yield takeEvery('UPDATE_DATA', fetchData);
}

function* watchResetClicks() {
  yield takeEvery('RESET_DATA', resetData);
}

export default function* rootSaga() {
  yield all([watchResetClicks(), watchUpdateClicks()]);
}
