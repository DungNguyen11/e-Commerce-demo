import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { ORDER_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

function* getOderListSaga(action) {
  try {
    // const { id } = action.payload;
    const result = yield axios.get(`http://localhost:4000/orders`, {
      // params: {
      //   userId: id
      // }
    });
    yield put({
      type: SUCCESS(ORDER_ACTION.GET_ORDER_LIST),
      payload: {
        data: result.data,
      }
    })

  } catch(e) {
    yield put({ type: FAIL(ORDER_ACTION.GET_ORDER_LIST), payload: { error: 'Error' } })
  }
}

function* orderCartSaga(action) {
  try {
    const result = yield axios.post(`http://localhost:4000/orders`, action.payload);
    yield put({
      type: SUCCESS(ORDER_ACTION.ORDER_CART),
      payload: {
        data: result.data,
      }
    })
  } catch(e) {
    yield put({ type: FAIL(ORDER_ACTION.ORDER_CART), payload: { error: 'Error' } })
  }
}

export default function* orderSaga() {
  yield takeEvery((REQUEST(ORDER_ACTION.GET_ORDER_LIST)), getOderListSaga);
  yield takeEvery((REQUEST(ORDER_ACTION.ORDER_CART)), orderCartSaga);
}