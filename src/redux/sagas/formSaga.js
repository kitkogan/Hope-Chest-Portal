import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchEvents(action) {
  
}

function* postEvents(action) {
  
}

function* deleteEvents(action) {
  
}

function* updateEvents(action) {
  
}


function* formSaga() {
  yield takeLatest('', fetchEvents);
  yield takeLatest('', postEvents);
  yield takeLatest('', deleteEvents);
  yield takeLatest('', updateEvents);

}

export default formSaga;
