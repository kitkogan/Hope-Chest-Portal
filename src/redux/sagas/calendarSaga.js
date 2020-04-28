import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchCalendarEvents(action) {
  console.log("CALENDAR SAGA:", action.payload);
  try {
    const response = yield axios.get(`/form/${action.payload}`);
    console.log("CALENDAR RESPONSE", response.data);
    yield put({ type: "SET_EVENTS", payload: response.data });
  } catch (error) {
    console.log('cannot get events for calendar', error);
  }
}

function* calendarSaga() {
  yield takeLatest('GET_CALENDAR', fetchCalendarEvents);
}

export default calendarSaga;
