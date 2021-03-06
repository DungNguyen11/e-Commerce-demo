import { createReducer } from "@reduxjs/toolkit";
import {
  PRODUCT_ACTION,
  FAVORITE_ACTION,
  REQUEST,
  SUCCESS,
  FAIL,
} from "../constants";

const initialState = {
  productList: {
    data: [],
    meta: {},
    loading: false,
    error: null,
  },
  productDetail: {
    data: {},
    loading: false,
    error: null,
  },
};

const productReducer = createReducer(initialState, {
  [REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state, action) => {
    return {
      ...state,
      productList: {
        ...state.productList,
        loading: true,
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state, action) => {
    const { data, meta, more } = action.payload;
    if (more) {
      return {
        ...state,
        productList: {
          ...state.productList,
          data: [...state.productList.data, ...data],
          meta,
          loading: false,
          error: null,
        },
      };
    }
    return {
      ...state,
      productList: {
        ...state.productList,
        data: data,
        meta,
        loading: false,
        error: null,
      },
    };
  },
  [FAIL(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      productList: {
        ...state.productList,
        loading: false,
        error,
      },
    };
  },

  [REQUEST(PRODUCT_ACTION.GET_PRODUCT_DETAIL)]: (state, action) => {
    return {
      ...state,
      productDetail: {
        ...state.productDetail,
        loading: true,
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.GET_PRODUCT_DETAIL)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      productDetail: {
        ...state.productDetail,
        data: data,
        loading: false,
        error: null,
      },
    };
  },
  [FAIL(PRODUCT_ACTION.GET_PRODUCT_DETAIL)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      productDetail: {
        ...state.productDetail,
        loading: false,
        error,
      },
    };
  },

  [SUCCESS(FAVORITE_ACTION.REMOVE_FAVORITE)]: (state, action) => {
    const { data } = action.payload;
    const newFavorites = [...state.productDetail.data.favorites];
    // Tim index cua favorite vua delete trong array favorites cua productDetail.data.favorites
    const favoriteIndex = newFavorites.findIndex(
      (favoriteItem) => favoriteItem.id === data.id
    );
    console.log(favoriteIndex);
    newFavorites.splice(favoriteIndex, 1);
    console.log(newFavorites);
    return {
      ...state,
      productDetail: {
        ...state.productDetail,
        data: {
          ...state.productDetail.data,
          favorites: [...newFavorites],
        },
        loading: false,
        error: null,
      },
    };
  },
});

export default productReducer;
