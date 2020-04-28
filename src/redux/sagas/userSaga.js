import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/user', config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

//Display events by user on user home page
function* getUserEvents(action) {

  console.log("saga coming from userSaga with:", action);
  try {
    const response = yield axios.get(`/form/user/${action.userId}`);
    console.log("in saga with", response.data);
    yield put({ type: "SET_EVENT", payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
  yield takeLatest('SET_EVENT1', getUserEvents);
}



export default userSaga;
