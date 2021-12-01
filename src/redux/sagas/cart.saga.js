import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { CART_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

import { notification } from "antd";

function* getCartListSaga(action) {
  try {
    const result = yield axios.get(`http://localhost:4000/carts`, {
      params: {
        _expand: "product",
      }
    });
    yield put({
      type: SUCCESS(CART_ACTION.GET_CART_LIST),
      payload: {
        data: result.data,
      }
    })

  } catch(e) {
    yield put({ type: FAIL(CART_ACTION.GET_CART_LIST), payload: { error: 'Error' } })
  }
}

function* addToCartSaga(action) {
  try {
    const { productId } = action.payload
    const result = yield axios.post(`http://localhost:4000/carts`, action.payload);
    yield put({
      type: SUCCESS(CART_ACTION.ADD_TO_CART),
      payload: {
        data: result.data,
      }
    })
    yield notification.success({
      message: "Added to Bag"
    })
    yield put({
      type: REQUEST(CART_ACTION.GET_CART_LIST),
      payload: {
        productId
      }
    })
  
  } catch(e) {
    yield put({ type: FAIL(CART_ACTION.ADD_TO_CART), payload: { error: 'Error' } })
  }
}

function* updateCartProductSaga(action) {
  try {
    const { data, callback } = action.payload
    yield axios.patch(`http://localhost:4000/carts/${data.id}`, {
      quantity: data.quantity,
    });
    yield put({
      type: SUCCESS(CART_ACTION.UPDATE_CART_PRODUCT),
      payload: {
        data: data,
      }
    })
    if(callback?.showSuccess) callback.showSuccess();
  } catch(e) {
    yield put({ type: FAIL(CART_ACTION.UPDATE_CART_PRODUCT), payload: { error: 'Error' } })
  }
}

function* removeCartProductSaga(action) {
  try {
    const { id } = action.payload
    yield axios.delete(`http://localhost:4000/carts/${id}`);
    yield put({
      type: SUCCESS(CART_ACTION.REMOVE_CART_PRODUCT),
      payload: {
        data: {
          id,
        }
      }
    })
  } catch(e) {
    yield put({ type: FAIL(CART_ACTION.UPDATE_CART_PRODUCT), payload: { error: 'Error' } })
  }
}

export default function* cartSaga() {
  yield takeEvery((REQUEST(CART_ACTION.GET_CART_LIST)), getCartListSaga);
  yield takeEvery((REQUEST(CART_ACTION.ADD_TO_CART)), addToCartSaga);
  yield takeEvery((REQUEST(CART_ACTION.UPDATE_CART_PRODUCT)), updateCartProductSaga);
  yield takeEvery((REQUEST(CART_ACTION.REMOVE_CART_PRODUCT)), removeCartProductSaga);
}