import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchCalendarEvents(action) {
  try {
    const response = yield axios.get(`/form/${action.payload}`);
    yield put({ type: "SET_EVENTS", payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

function* calendarSaga() {
  yield takeLatest('GET_CALENDAR', fetchCalendarEvents);
}

export default calendarSaga;
