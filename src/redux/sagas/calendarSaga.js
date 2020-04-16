import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchCalendarEvents(action) {
  
}

function* postCalendarEvents(action) {
  
}

function* updateCalendarEvents(action) {
  
}

function* deleteCalendarEvents(action) {
  
}



function* calendarSaga() {
  yield takeLatest('', fetchCalendarEvents);
  yield takeLatest('', postCalendarEvents);
  yield takeLatest('', updateCalendarEvents);
  yield takeLatest('', deleteCalendarEvents);

}

export default calendarSaga;
