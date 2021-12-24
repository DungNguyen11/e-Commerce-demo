import { createReducer } from "@reduxjs/toolkit";
import { INFO_FORM_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

const initialState = {
  infoFormList: {
    data: [],
    loading: false,
    error: null,
  },
  infoFormItem: {
    data: {},
    loading: false,
    error: null,
  }
}

const infoFormReducer = createReducer(initialState, {
  [REQUEST(INFO_FORM_ACTION.GET_INFO_FORM_LIST)]: (state, action) => {
    return {
      ...state,
      infoFormList: {
        ...state.infoFormList,
        loading: true,
      }
    }
  },
  [SUCCESS(INFO_FORM_ACTION.GET_INFO_FORM_LIST)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      infoFormList: {
        ...state.infoFormList,
        data: data,
        loading: false,
        error: null,
      }
    }
  },
  [FAIL(INFO_FORM_ACTION.GET_INFO_FORM_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      infoFormList: {
        ...state.infoFormList,
        loading: false,
        error,
      }
    }
  },

  [REQUEST(INFO_FORM_ACTION.SET_INFO_FORM)]: (state, action) => {
    return {
      ...state,
      infoFormList: {
        ...state.infoFormList,
        loading: true,
      }
    }
  },
  [SUCCESS(INFO_FORM_ACTION.SET_INFO_FORM)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      infoFormList: {
        ...state.infoFormList,
        data: [...state.infoFormList.data, data],
        loading: false,
        error: null,
      },
    }
  },
  [FAIL(INFO_FORM_ACTION.SET_INFO_FORM)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      infoFormList: {
        ...state.infoFormList,
        loading: false,
        error,
      }
    }
  },

  [REQUEST(INFO_FORM_ACTION.GET_INFO_FORM_ITEM)]: (state, action) => {
    return {
      ...state,
      infoFormItem: {
        ...state.infoFormItem,
        loading: true,
      }
    }
  },
  [SUCCESS(INFO_FORM_ACTION.GET_INFO_FORM_ITEM)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      infoFormItem: {
        ...state.infoFormItem,
        data: data,
        loading: false,
        error: null,
      }
    }
  },
  [FAIL(INFO_FORM_ACTION.GET_INFO_FORM_ITEM)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      infoFormItem: {
        ...state.infoFormItem,
        loading: false,
        error,
      }
    }
  },

  [SUCCESS(INFO_FORM_ACTION.DELETE_INFO_FORM)]: (state, action) => {
    const { data } = action.payload;
    const newInfoFormList = [...state.infoFormList.data];
    const infoFormIndex = newInfoFormList.findIndex(
      (formItem) => formItem.id === data.id 
    );
    newInfoFormList.splice(infoFormIndex, 1 )
    return {
      ...state,
      infoFormList: {
        ...state.infoFormList,
        data: newInfoFormList,
        loading: false,
        error: null,
      }
    }
  },

  [SUCCESS(INFO_FORM_ACTION.UPDATE_INFO_FORM)]: (state, action) => {
    const { data } = action.payload;
    const newInfoFormList = [...state.infoFormList.data];
    const infoFormIndex = newInfoFormList.findIndex(
      (formItem) => formItem.id === data.id 
    );
    console.log(infoFormIndex)
    newInfoFormList.splice(infoFormIndex, 1, {
      ...state.infoFormList.data[infoFormIndex],
      info: data.info,
    })
    return {
      ...state,
      infoFormList: {
        ...state.infoFormList,
        data: newInfoFormList,
        loading: false,
        error: null,
      }
    }
  },

})

export default infoFormReducer;