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
  console.log('in updateFORM with', action.payload, 'id', action.id);
    // yield axios.put(`/form/form/${action.id}`, action.payload);
    // console.log('back from update server');
    
} catch (error) {
  console.log("Error updating event:", error);
  yield put({ type: "ADDING_EVENT_FAILED" });
}
}

function* getImages(){
  const imageList = yield axios.get('/form/form');
  console.log('in saga - get images/GET with:', imageList.data);
  yield put({type: 'SET_STORED_IMAGES', payload: imageList.data})
}

// posts new image to postgres
function* addImage(image){
  console.log('in saga images/POST with:', image.payload);
  const config = { headers: {'Content-Type': 'multipart/form-data'} }
  try {
      const res = yield axios.post('/form/form', image.payload, config);
      console.log('in saga post with res.data', res.data)
      yield put({type: 'STORE_THIS_IMAGE', payload: res.data});
      yield put({type: 'GET_STORED_IMAGES'});
  } catch(error){
      console.log('error in saga /images/POST:', error);
  }
}


function* formSaga() {
  yield takeEvery('GET_FORM', getEvent);
  yield takeEvery('SUBMIT_FORM', submitForm);
  yield takeEvery('UPDATE_FORM', updateForm);
  yield takeEvery('GET_STORED_IMAGES', getImages);
  yield takeEvery('STORE_IMAGE', addImage);
  // yield takeEvery('', deleteEvents);u
}

export default formSaga;
