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
    
    yield axios.post("/form", action.payload);

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
  yield takeEvery('EVENT_INFO', postEvents);
  // yield takeEvery('', deleteEvents);
  // yield takeEvery('', updateEvents);

}

export default formSaga;
