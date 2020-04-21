import { put, takeEvery } from 'redux-saga/effects';
// import axios from 'axios';


function* fetchEvents(action) { 
  console.log("saga coming from formSaga with:", action);
  try {
    // const response = yield axios.get(`/form/${action.id}`);
    // console.log("in saga with", response.data);
    // yield put({ type: "SET_EVENT", payload: response.data });
  } catch (error) {
    console.log(error);
  }
}
// function* postEntry(action) {
//   console.log("in feedingSaga POST REQ with:", action.payload);
//   try {
//     const response = yield axios.post(`/entries/post`, action.payload );
//     console.log('in feedingSaga POST (try) with', response.data);
//     yield put({ type: "GET_FEEDING", payload: action.payload.userId });
//   } catch (error) {
//     console.log(error);
//   }
// }

// function* postForm1(action) {
//     try {
//     console.log('in postFORM1 for form pg 1', action.payload);
//     // yield axios.post("/form/userForm", action.payload);
//   } catch (error) {
//     console.log("Error with adding event:", error);
//     yield put({ type: "ADDING_EVENT_FAILED" });
//   }
// }

// function* postForm2(action) {
//   try {
//   console.log('in postFORM 2 for form pg 2', action.payload);
//   // yield axios.post("/form/eventForm", action.payload);
// } catch (error) {
//   console.log("Error with adding event:", error);
//   yield put({ type: "ADDING_EVENT_FAILED" });
// }
// }

// function* postForm3(action) {
//   try {
//   console.log('in postFORM 3 for form pg 3', action.payload);
//   // yield axios.post("/form/fundForm", action.payload);
// } catch (error) {
//   console.log("Error with adding event:", error);
//   yield put({ type: "ADDING_EVENT_FAILED" });
// }
// }

function* submitForm(action) {
  try {
  console.log('in submitFORM', action.payload);
  // yield axios.post("/form/fundForm", action.payload);
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
  // yield takeEvery('FETCH_EVENT', fetchEvents);
  yield takeEvery('SUBMIT_FORM', submitForm);
  // yield takeEvery('POST_FORM1', postForm1);
  // yield takeEvery('POST_FORM2', postForm2);
  // yield takeEvery('POST_FORM3', postForm3);
  // yield takeEvery('', deleteEvents);
  // yield takeEvery('', updateEvents);
}

export default formSaga;
