import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { INFO_FORM_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

function* getInfoFormListSaga(action) {
  try {
    const { userId } = action.payload;
    const result = yield axios.get("http://localhost:4000/infos", {
      params: {
        userId,
      }
    });
    yield put({
      type: SUCCESS(INFO_FORM_ACTION.GET_INFO_FORM_LIST),
      payload: {
        data: result.data,
      }
    })

  } catch(e) {
    yield put({ type: FAIL(INFO_FORM_ACTION.GET_INFO_FORM_LIST), payload: { error: 'Error' } })
  }
}

function* getInfoFormItemSaga(action) {
  try {
    const { id, userId } = action.payload;
    const result = yield axios.get(`http://localhost:4000/infos/${id}`, {
      params: {
        userId,
      }
    });
    yield put({
      type: SUCCESS(INFO_FORM_ACTION.GET_INFO_FORM_ITEM),
      payload: {
        data: result.data,
      }
    })

  } catch(e) {
    yield put({ type: FAIL(INFO_FORM_ACTION.GET_INFO_FORM_ITEM), payload: { error: 'Error' } })
  }
}

function* setInfoFormSaga(action) {
  try {
    const { data, callback } = action.payload;
    const result = yield axios.post("http://localhost:4000/infos", data);
    yield callback.clearForm(); 
    yield put({
      type: SUCCESS(INFO_FORM_ACTION.SET_INFO_FORM),
      payload: {
       data: result.data
      }
    })
  } catch(e) {
    yield put({ type: FAIL(INFO_FORM_ACTION.SET_INFO_FORM), payload: { error: 'Error' } })
  }
}

function* deleteInfoFormSaga(action) {
  try {
    const { id } = action.payload;
    yield axios.delete(`http://localhost:4000/infos/${id}`); 
    yield put({
      type: SUCCESS(INFO_FORM_ACTION.DELETE_INFO_FORM),
      payload: {
       data: { id }
      }
    })
  } catch(e) {
    yield put({ type: FAIL(INFO_FORM_ACTION.DELETE_INFO_FORM), payload: { error: 'Error' } })
  }
}

function* updateInfoFormSaga(action) {
  try {
    const { id, data} = action.payload;
    yield axios.patch(`http://localhost:4000/infos/${id}`, {
      info: data.info,
    }); 
    yield put({
      type: SUCCESS(INFO_FORM_ACTION.UPDATE_INFO_FORM),
      payload: {
       data: { 
         id,
         info: data.info,
        }
      }
    })
  } catch(e) {
    yield put({ type: FAIL(INFO_FORM_ACTION.UPDATE_INFO_FORM), payload: { error: 'Error' } })
  }
}

export default function* infoFormSaga() {
  yield takeEvery((REQUEST(INFO_FORM_ACTION.GET_INFO_FORM_LIST)), getInfoFormListSaga);
  yield takeEvery((REQUEST(INFO_FORM_ACTION.SET_INFO_FORM)), setInfoFormSaga);
  yield takeEvery((REQUEST(INFO_FORM_ACTION.GET_INFO_FORM_ITEM)), getInfoFormItemSaga);
  yield takeEvery((REQUEST(INFO_FORM_ACTION.DELETE_INFO_FORM)), deleteInfoFormSaga);
  yield takeEvery((REQUEST(INFO_FORM_ACTION.UPDATE_INFO_FORM)), updateInfoFormSaga);
}