import { put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions
function* admin (action) {
    console.log("ADMIN saga coming from admin with:", action.payload);
  try {
    const response = yield axios.get("/admin", action.payload);
    console.log("in saga with", response.data);
    yield put({ type: "SET_ADMIN", payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

//Get selected event form details to display on Admin Review page 
function* getAdminEvent(action) { 
  console.log("saga coming from adminSaga with:", action);
  try {
    const response = yield axios.get(`/admin/get/${action.formId}`);
    console.log("in saga GETADMINEVENT with", response.data);
    yield put({ type: 'SET_DETAILS', payload: response.data });
  } catch (error) {
    console.log("getAdminEvent Error", error);
  }
}


//Edit event form details on Admin Review page
function* updateAdminForm(action) {
  try {
  console.log('in updateAdminForm from ADMIN with', action.payload, 'id', action.id);
    // yield axios.put(`/admin/${action.id}`, action.payload);
    // console.log('update ADMIN FORM from admin saga');
} catch (error) {
  console.log("Error updating event:", error);
  yield put({ type: "REVIEWING_EVENT_FAILED" });
}
}
// function* updateForm(action) {
//   try {
//     console.log("in updateFORM with", action.payload, "id", action.id);
//     // yield axios.put(`/form/form/${action.id}`, action.payload);
//     // console.log('back from update server');
//   } catch (error) {
//     console.log("Error updating event:", error);
//     yield put({ type: "ADDING_EVENT_FAILED" });
//   }
// }
 

//Edit approval status between approved and unapproved on Admin Page
function* updateApprovalStatus(update) {
  console.log("in updateTask of ADMIN saga", update.payload, update.approved);
  try {
    yield axios.put(`admin/update/${update.payload}`, {
      approved: update.approved
    })
    yield put({ type:"GET_ADMIN"});
  } catch (error) {
    console.log("Error updating approval status", error);
  }
}


function* adminSaga() {
  yield takeEvery('GET_ADMIN', admin);
  yield takeEvery("UPDATE_ADMIN_FORM", updateAdminForm);
  yield takeEvery('GET_ADMIN_FORM', getAdminEvent);
  yield takeEvery('SET_STATUS_1', updateApprovalStatus);
}

export default adminSaga;
