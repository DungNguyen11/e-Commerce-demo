import { createReducer } from "@reduxjs/toolkit";
import { COMMON_ACTION, SUCCESS } from "../constants";

const initialState = {
  cityList: {
    data: [],
    loading: false,
    error: null,
  },
  districtList: {
    data: [],
    loading: false,
    error: null,
  },
  wardList: {
    data: [],
    loading: false,
    error: null,
  },
}

const commonReducer = createReducer(initialState, {
  [SUCCESS(COMMON_ACTION.GET_CITY_LIST)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      cityList: {
        ...state.cityList,
        data: data,
        loading: false,
        error: null,
      }
    }
  },

  [SUCCESS(COMMON_ACTION.GET_DISTRICT_LIST)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      districtList: {
        ...state.districtList,
        data: data,
        loading: false,
        error: null,
      }
    }
  },

  [SUCCESS(COMMON_ACTION.GET_WARD_LIST)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      wardList: {
        ...state.wardList,
        data: data,
        loading: false,
        error: null,
      }
    }
  },

})

export default commonReducer;