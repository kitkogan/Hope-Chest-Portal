import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions
function* admin (action) {
    console.log("ADMIN saga coming from admin with:", action);
  try {
    // const response = yield axios.get(`/form/${action.id}`);
    // console.log("in saga with", response.data);
    // yield put({ type: "SET_EVENT", payload: response.data });
  } catch (error) {
    console.log(error);
  }
}
 

function* adminSaga() {
  yield takeLatest('GET_ADMIN', admin);
  
}

export default admin;
