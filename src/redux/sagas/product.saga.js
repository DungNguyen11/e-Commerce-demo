import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { PRODUCT_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";
import { DEFAULT_PRICE_FILTER } from "../../pages/user/AllProductList/constants";

function* getProductListSaga(action) {
  try {
    const {
      limit,
      page,
      more,
      categoryFilter,
      keyword,
      priceFilter,
      sortFilter,
      type,
    } = action.payload;
    let categoryParam = "";
    if (categoryFilter) {
      categoryFilter.forEach((filterItem, filterIndex) => {
        const paramAnd = filterIndex === 0 ? "" : "&";
        categoryParam =
          categoryParam + `${paramAnd}categoryId=${filterItem.id}`;
      });
    }
    const result = yield axios.get(
      `http://localhost:4000/products?${categoryParam}`,
      {
        params: {
          _limit: limit,
          _page: page,
          ...(keyword && { q: keyword }),
          ...(priceFilter &&
            (priceFilter[0] !== DEFAULT_PRICE_FILTER[0] ||
              priceFilter[1] !== DEFAULT_PRICE_FILTER[1]) && {
              price_gte: priceFilter[0],
              price_lte: priceFilter[1],
            }),
          ...(sortFilter && { _sort: "price", _order: sortFilter }),
          ...(type && { type })
        },
      }
    );
    yield put({
      type: SUCCESS(PRODUCT_ACTION.GET_PRODUCT_LIST),
      payload: {
        data: result.data,
        meta: {
          page,
          total: parseInt(result.headers["x-total-count"]),
        },
        more,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_ACTION.GET_PRODUCT_LIST),
      payload: { error: "Error" },
    });
  }
}

function* getProductDetailSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield axios.get(
      `http://localhost:4000/products/${id}/?_embed=productOptions&_embed=favorites`,
      {
        params: {
          _expand: "category",
        },
      }
    );
    yield put({
      type: REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST),
      payload: {
        limit: 10,
        page: 1,
        categoryFilter: [result.data.category],
      },
    });
    yield put({
      type: SUCCESS(PRODUCT_ACTION.GET_PRODUCT_DETAIL),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_ACTION.GET_PRODUCT_DETAIL),
      payload: { error: "Error" },
    });
  }
}

export default function* productSaga() {
  yield takeEvery(REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST), getProductListSaga);
  yield takeEvery(
    REQUEST(PRODUCT_ACTION.GET_PRODUCT_DETAIL),
    getProductDetailSaga
  );
}
