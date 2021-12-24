import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import {
  authReducer,
  productReducer,
  categoryReducer,
  commentReducer,
  cartReducer,
  orderReducer,
  discountReducer,
  infoFormReducer,
  favoriteReducer,
  commonReducer,
} from "./redux/reducers";

import rootSaga from "./redux/sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    authReducer,
    productReducer,
    categoryReducer,
    commentReducer,
    cartReducer,
    orderReducer,
    discountReducer,
    infoFormReducer,
    favoriteReducer,
    commonReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
