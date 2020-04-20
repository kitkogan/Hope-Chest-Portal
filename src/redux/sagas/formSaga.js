import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* fetchEvents(action) { 
  console.log("saga coming from formSaga with:", action);
  try {
    const response = yield axios.get(`/form/${action.id}`);
    console.log("in saga with", response.data);
    yield put({ type: "SET_EVENT", payload: response.data });
  } catch (error) {
    console.log(error);
  }
}


function* postEvents(action) {
    try {
    console.log('in postEvents', action.payload);  
    yield axios.post("/form/form", action.payload);
  } catch (error) {
    console.log("Error with adding event:", error);
    yield put({ type: "ADDING_EVENT_FAILED" });
  }
}

// function* deleteEvents(action) {
  
// }

// function* updateEvents(action) {
  
// }


function* formSaga() {
  yield takeEvery('FETCH_EVENT', fetchEvents);
  yield takeEvery('POST_EVENT', postEvents);
  // yield takeEvery('', deleteEvents);
  // yield takeEvery('', updateEvents);

}

export default formSaga;
