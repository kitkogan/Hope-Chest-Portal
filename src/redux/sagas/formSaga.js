import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* getEvent(action) { 
  console.log("saga coming from formSaga with:", action);
  try {
    const response = yield axios.get(`/form/${action.id}`);
    console.log("in saga with", response.data);
    yield put({ type: 'DISPLAY_FORM', payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

function* submitForm(action) {
  try {
  console.log('in submitFORM', action.payload);
  yield axios.post("/form/form", action.payload);
} catch (error) {
  console.log("Error with adding event:", error);
  yield put({ type: "ADDING_EVENT_FAILED" });
}
}

function* updateForm(action) {
  try {
  console.log('in updateFORM with', action.payload, 'form id', action.id);
    yield axios.put(`/form/form/${action.id}`, action.payload);
    console.log('back from update server');
    
} catch (error) {
  console.log("Error updating event:", error);
  yield put({ type: "ADDING_EVENT_FAILED" });
}
}
// function* deleteEvents(action) {
  
// }


function* formSaga() {
  yield takeEvery('GET_FORM', getEvent);
  yield takeEvery('SUBMIT_FORM', submitForm);
  yield takeEvery('UPDATE_FORM', updateForm);
  // yield takeEvery('', deleteEvents);u
}

export default formSaga;
