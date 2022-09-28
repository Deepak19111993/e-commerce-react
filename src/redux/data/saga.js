import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  REQUEST_FETCH_DATA,
  SUCCESS_FETCH_DATA,
  FAIL_FETCH_DATA,
  REQUEST_MEME_DATA,
  SUCCESS_MEME_DATA,
  FAIL_MEME_DATA,
} from "../actionType";

import axios from "axios";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
console.log("sagaData");
function* getData() {
  try {
    const res = yield axios.get(
      "https://api.bestbuy.com/v1/products?apiKey=jLG38zOafI7GWMQ8LDjpORdN&pageSize=20&format=json"
    );

    if (res.status === 200) {
      console.log(res.data);
      yield put({
        type: SUCCESS_FETCH_DATA,
        payload: res.data,
      });
    }
  } catch (e) {
    yield put({
      type: FAIL_FETCH_DATA,
      payload: e,
    });
  }
}

function* dataSaga() {
  //   yield takeLatest(getData);
  yield takeLatest(REQUEST_FETCH_DATA, getData);
  //   yield takeLatest(REQUEST_MEME_DATA, getMeme);
}

export default dataSaga;
