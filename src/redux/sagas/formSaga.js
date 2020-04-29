import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* getEvent(action) { 
  console.log("saga coming from formSaga with:", action.id);
  try {
    const response = yield axios.get(`/form/user/${action.id}`);
    console.log("in saga with", response.data);
    yield put({ type: 'DISPLAY_FORM', payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

function* getThisForm(action) {
  console.log("saga coming from getThisForm with:", action.payload.id);
  try {
    const newForm = yield axios.get(`/form/form/${action.payload.id}`);
    console.log("in saga with", newForm.data);
    yield put({ type: "DISPLAY_FORM", payload: newForm.data });
  } catch (error) {
    console.log(error);
  }
}

function* submitForm(action) {
  try {
  console.log('in submitFORM', action.payload);
    const response = yield axios.post("/form/form", action.payload);
    console.log('SUBMIT', response);
    yield put({ type: "GET_THIS_FORM", payload: response.data[0]});
} catch (error) {
  console.log("Error with adding event:", error);
  yield put({ type: "ADDING_EVENT_FAILED" });
}
}

function* updateForm(action) {
  try {
  console.log('in updateFORM with', action.payload, 'id', action.user);
    yield axios.put(`/form/form/${action.id}`, action.payload);
    console.log('back from update server');
    yield put({ type: 'GET_THIS_FORM', payload: action});
    yield put({ type: 'TOGGLE_EDIT'});
} catch (error) {
  console.log("Error updating event:", error);
  yield put({ type: "ADDING_EVENT_FAILED" });
}
}

function* formSaga() {
  yield takeEvery('GET_FORM', getEvent);
  yield takeEvery('SUBMIT_FORM', submitForm);
  yield takeEvery('UPDATE_FORM', updateForm);
  yield takeEvery('GET_THIS_FORM', getThisForm);
}

export default formSaga;
