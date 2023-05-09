import {
  takeEvery,
  // call,
  // put,
} from 'redux-saga/effects';
import authActions from '../slices/authSlice';

function* logIn(action: any) {
  // const {
  // email,
  // password,
  // successCallback = () => null,
  // errorCallback = () => null,
  // } = action.payload;

  try {
    yield console.log(action);
  } catch (error) {
    console.log(error);
  }
}

function* authSaga() {
  yield takeEvery(authActions.logIn, logIn);
}

export default authSaga;
