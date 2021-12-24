import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { notification } from 'antd';

import { AUTH_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

function* loginSaga(action) {
  try {
    const { data, callback } = action.payload;
    const result = yield axios.post("http://localhost:4000/login", data)
    yield localStorage.setItem(
      "userInfo",
      JSON.stringify({
        accessToken: result.data.accessToken,
        // role: result.data.user.role,
      })
    );
    yield put({
      type: SUCCESS(AUTH_ACTION.LOGIN),
      payload: {
        data: result.data.user,
      },
    })
    yield callback.showSuccess();
    yield callback.redirectHome();
  } catch(e) {
    yield put({
      type: FAIL(AUTH_ACTION.LOGIN),
      payload: {
        error:
          (e.response.data === "Cannot find user" ||
            e.response.data === "Incorrect password") &&
          "Login Failed!",
      },
    })
  }
}

function* registerSaga(action) {
  try {
    const { data, callback } = action.payload;
    yield axios.post("http://localhost:4000/register", data);
    yield put({ type: SUCCESS(AUTH_ACTION.REGISTER) });
    yield notification.success({
      message: "Register Success!"
    })
    yield callback.goBackLogin();
  } catch (e) {
    yield put({
      type: FAIL(AUTH_ACTION.REGISTER),
      payload: {
        error:
          e.response.data === "Email already exists"
            ? "Email already exists"
            : "Success!",
      },
    })
  }
}

function* getUserInfoSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield axios.get(`http://localhost:4000/users/${id}`, {
      params: {
        _expand: "info"
      }
    });
    yield put({
      type: SUCCESS(AUTH_ACTION.GET_USER_INFO),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(AUTH_ACTION.GET_USER_INFO),
      payload: {
        error: "Error",
      },
    });
  }
}

function* changePassWordSaga(action) {
  try {
    const { id, data, callback } = action.payload;
    yield axios.post("http://localhost:4000/login", {
      email: data.email,
      password: data.oldPassword,
    })
    const result = yield axios.patch(`http://localhost:4000/users/${id}`, {
      password: data.newPassword, 
    });
    yield callback.clearForm();
    yield put({
      type: SUCCESS(AUTH_ACTION.CHANGE_PASSWORD),
      payload: {
        data: result.data,
      },
    });
    yield notification.success({
      message: "Your password is changed!"
    })
  } catch (e) {
    yield put({
      type: FAIL(AUTH_ACTION.CHANGE_PASSWORD),
      payload: {
        error: "Error",
      },
    });
    yield notification.error({
      message: "Change Password: Failed!"
    })
  }
}

function* changeDetailSaga(action) {
  try {
    const { id, data } = action.payload;
    const result = yield axios.patch(`http://localhost:4000/users/${id}`, {
      email: data.email, 
      name: data.name,
    });
    yield put({
      type: SUCCESS(AUTH_ACTION.CHANGE_DETAIL),
      payload: {
        data: result.data,
      },
    });
    yield notification.success({
      message: "Your information is changed!"
    })
  } catch (e) {
    yield put({
      type: FAIL(AUTH_ACTION.CHANGE_DETAIL),
      payload: {
        error: "Error",
      },
    });
    yield notification.error({
      message: "Failed!"
    })
  }
}

function* changeDefaultInfoFormSaga(action) {
  try {
    const { id, data } = action.payload;
    yield axios.patch(`http://localhost:4000/users/${id}`, {
      infoId: data.infoFormId,
    });
    yield put({
      type: SUCCESS(AUTH_ACTION.CHANGE_DEFAULT_INFO_FORM),
      payload: {
        data: {
          infoId: data.infoFormId,
        }
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(AUTH_ACTION.CHANGE_DEFAULT_INFO_FORM),
      payload: {
        error: "Error",
      },
    });
  }
}

export default function* authSaga() {
  yield takeEvery((REQUEST(AUTH_ACTION.LOGIN)), loginSaga);
  yield takeEvery(REQUEST(AUTH_ACTION.REGISTER), registerSaga);
  yield takeEvery(REQUEST(AUTH_ACTION.GET_USER_INFO), getUserInfoSaga);
  yield takeEvery(REQUEST(AUTH_ACTION.CHANGE_PASSWORD), changePassWordSaga);
  yield takeEvery(REQUEST(AUTH_ACTION.CHANGE_DETAIL), changeDetailSaga);
  yield takeEvery(REQUEST(AUTH_ACTION.CHANGE_DEFAULT_INFO_FORM), changeDefaultInfoFormSaga);
}