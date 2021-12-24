import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { FAVORITE_ACTION, PRODUCT_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

function* getFavoriteListSaga(action) {
  try {
    const { userId, productId } = action.payload;
    const result = yield axios.get("http://localhost:4000/favorites", {
      params: {
        userId,
        // productId,
        _expand: "product"
      }
    });
    yield put({
      type: SUCCESS(FAVORITE_ACTION.GET_FAVORITE_LIST),
      payload: {
        data: result.data,
      }
    })

  } catch(e) {
    yield put({ type: FAIL(FAVORITE_ACTION.GET_FAVORITE_LIST), payload: { error: 'Error' } })
  }
}

function* removeFavoriteSaga(action) {
  try {
    const { id } = action.payload;
    yield axios.delete(`http://localhost:4000/favorites/${id}`);
    yield put({
      type: SUCCESS(FAVORITE_ACTION.REMOVE_FAVORITE),
      payload: {
        data: { id }
      }
    })

  } catch(e) {
    yield put({ type: FAIL(FAVORITE_ACTION.REMOVE_FAVORITE), payload: { error: 'Error' } })
  }
}

function* postFavoriteSaga(action) {
  try {
    const { userId, productId } = action.payload;
    const result = yield axios.post("http://localhost:4000/favorites", action.payload);
    // yield put({
    //   type: REQUEST(FAVORITE_ACTION.GET_FAVORITE_LIST),
    //   payload: {
    //     userId,
    //     productId
    //   }
    // })
    yield put({
      type: SUCCESS(FAVORITE_ACTION.POST_FAVORITE),
      payload: {
        data: result.data
      }
    });
     yield put({
      type: REQUEST(PRODUCT_ACTION.GET_PRODUCT_DETAIL),
      payload: {
        id: productId,
      }
    });
  } catch(e) {
    yield put({ type: FAIL(FAVORITE_ACTION.POST_FAVORITE), payload: { error: 'Error' } })
  }
}

export default function* favoriteSaga() {
  yield takeEvery((REQUEST(FAVORITE_ACTION.GET_FAVORITE_LIST)), getFavoriteListSaga);
  yield takeEvery((REQUEST(FAVORITE_ACTION.POST_FAVORITE)), postFavoriteSaga);
  yield takeEvery((REQUEST(FAVORITE_ACTION.REMOVE_FAVORITE)), removeFavoriteSaga);

}