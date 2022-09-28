import { all, call } from "redux-saga/effects";
import dataSaga from "./data/saga";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* rootSaga() {
  yield all([call(dataSaga)]);
}

export default rootSaga;
