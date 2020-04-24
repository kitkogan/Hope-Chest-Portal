import {
    //  put, 
     takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions
function* getAdmin (action) {
    console.log("ADMIN saga coming from admin with:", action);
    try {
        const response = yield axios.get(`/admin/${action.payload}`);
        console.log('in saga with', response.data);
        // yield put({ type: "SET_DIAPER", payload: response.data });
    } catch (error) {
        console.log("error on adminSaga", error);
        }
};

 
function* admin() {
  yield takeLatest('GET_ADMIN', getAdmin);
  
}

export default admin;
