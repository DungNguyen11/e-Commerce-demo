import { createReducer } from "@reduxjs/toolkit";
import { FAVORITE_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

const initialState = {
  favoriteList: {
    data: [],
    loading: false,
    error: null,
  },
}

const favoriteReducer = createReducer(initialState, {
  [REQUEST(FAVORITE_ACTION.GET_FAVORITE_LIST)]: (state, action) => {
    return {
      ...state,
      favoriteList: {
        ...state.favoriteList,
        loading: true,
      }
    }
  },
  [SUCCESS(FAVORITE_ACTION.GET_FAVORITE_LIST)]: (state, action) => {
    const { data } = action.payload;
    console.log(data)
    return {
      ...state,
      favoriteList: {
        ...state.favoriteList,
        data: data,
        loading: false,
        error: null,
      }
    }
  },
  [FAIL(FAVORITE_ACTION.GET_FAVORITE_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      favoriteList: {
        ...state.favoriteList,
        loading: false,
        error,
      }
    }
  },

  [REQUEST(FAVORITE_ACTION.POST_FAVORITE)]: (state, action) => {
    return {
      ...state,
      favoriteList: {
        ...state.favoriteList,
        loading: true,
      }
    }
  },
  [SUCCESS(FAVORITE_ACTION.POST_FAVORITE)]: (state, action) => {
    const { data } = action.payload;
    console.log(data)
    return {
      ...state,
      favoriteList: {
        ...state.favoriteList,
        data: [...state.favoriteList.data, data],
        loading: false,
        error: null,
      }
    }
  },
  [FAIL(FAVORITE_ACTION.POST_FAVORITE)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      favoriteList: {
        ...state.favoriteList,
        loading: false,
        error,
      }
    }
  },

  [REQUEST(FAVORITE_ACTION.REMOVE_FAVORITE)]: (state, action) => {
    return {
      ...state,
      favoriteList: {
        ...state.favoriteList,
        loading: true,
      }
    }
  },
  // [SUCCESS(FAVORITE_ACTION.REMOVE_FAVORITE)]: (state, action) => {
  //   const { data } = action.payload;
  //   return {
  //     ...state,
  //     favoriteList: {
  //       ...state.favoriteList,
  //       data: data,
  //       loading: false,
  //       error: null,
  //     }
  //   }
  // },
  [FAIL(FAVORITE_ACTION.REMOVE_FAVORITE)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      favoriteList: {
        ...state.favoriteList,
        loading: false,
        error,
      }
    }
  }

})

export default favoriteReducer;

