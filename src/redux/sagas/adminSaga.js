import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

// Displays all events on Admin page with table
function* admin(action) {
  try {
    const response = yield axios.get(`/admin/${action.id}`, action.payload);
    yield put({ type: "SET_ADMIN", payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

//Get selected event form details to display on Admin Review page
function* getAdminEvent(action) {
  try {
    const response = yield axios.get(`/admin/get/${action.formId}`);
    yield put({ type: "SET_DETAILS", payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

function* updateAdminForm(action) {
  try {
    yield axios.put(`/admin/review/${action.form}`, action.payload);
    yield put({ type: "GET_ADMIN_FORM", payload: action });
    yield put({ type: "TOGGLE_EDIT" });
  } catch (error) {
    console.log(error);
    yield put({ type: "ADDING_EVENT_FAILED" });
  }
}

//Edit approval status between approved and unapproved on Admin Page
function* updateApprovalStatus(update) {
  try {
    yield axios.put(`admin/update/${update.payload}`, {
      approved: update.approved,
    });
    yield put({ type: "GET_ADMIN" });
  } catch (error) {
    console.log(error);
  }
}

function* adminSaga() {
  yield takeEvery("GET_ADMIN", admin);
  yield takeEvery("UPDATE_ADMIN_FORM", updateAdminForm);
  yield takeEvery("GET_ADMIN_FORM", getAdminEvent);
  yield takeEvery("SET_STATUS_1", updateApprovalStatus);
}

export default adminSaga;
