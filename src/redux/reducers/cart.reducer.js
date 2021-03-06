import { createReducer } from "@reduxjs/toolkit";
import { CART_ACTION, ORDER_ACTION, AUTH_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

const initialState = {
  cartList: {
    data: [],
    loading: false,
    error: null,
  },
  selectedCarts: [],
}

const cartReducer = createReducer(initialState, {
  [REQUEST(CART_ACTION.GET_CART_LIST)]: (state, action) => {
    return {
      ...state,
      cartList: {
        ...state.cartList,
        loading: true,
      }
    }
  },
  [SUCCESS(CART_ACTION.GET_CART_LIST)]: (state, action) => {
    const { data } = action.payload;
    console.log(data)
    return {
      ...state,
      cartList: {
        ...state.cartList,
        data: data,
        loading: false,
        error: null,
      }
    }
  },
  [FAIL(CART_ACTION.GET_CART_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      cartList: {
        ...state.cartList,
        loading: false,
        error,
      }
    }
  },

  [REQUEST(CART_ACTION.ADD_TO_CART)]: (state, action) => {
    return {
      ...state,
      cartList: {
        ...state.cartList,
        loading: true,
      }
    }
  },
  [SUCCESS(CART_ACTION.ADD_TO_CART)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      cartList: {
        ...state.cartList,
        data: data,
        loading: false,
        error: null,
      }
    }
  },
  [FAIL(CART_ACTION.ADD_TO_CART)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      cartList: {
        ...state.cartList,
        loading: false,
        error,
      }
    }
  },

  [SUCCESS(CART_ACTION.UPDATE_CART_PRODUCT)]: (state, action) => {
    const { data } = action.payload;
    const newCartList = [...state.cartList.data];
    // Tim index cua cart vua update trong array cartList
    const cartIndex = newCartList.findIndex(
      (cartItem) => cartItem.id === data.id 
    );
    newCartList.splice(cartIndex, 1, {
      ...state.cartList.data[cartIndex],
      quantity: data.quantity,
    })
    return {
      ...state,
      cartList: {
        ...state.cartList,
        data: newCartList,
        loading: false,
        error: null,
      }
    }
  },

  [SUCCESS(CART_ACTION.REMOVE_CART_PRODUCT)]: (state, action) => {
    const { data } = action.payload;
    const newCartList = [...state.cartList.data];
    // Tim index cua cart vua delete trong array cartList
    const cartIndex = newCartList.findIndex(
      (cartItem) => cartItem.id === data.id 
    );
    console.log(cartIndex)
    newCartList.splice(cartIndex, 1 )
    return {
      ...state,
      cartList: {
        ...state.cartList,
        data: newCartList,
        loading: false,
        error: null,
      }
    }
  },

  [REQUEST(CART_ACTION.SET_SELECTED_CARTS)]: (state, action) => {
    return {
      ...state,
      selectedCarts: [...action.payload],
    }
  },

  [REQUEST(CART_ACTION.UPDATE_SELECTED_CARTS)]: (state, action) => {
    const { data } = action.payload;
    const newSelectedCartList = [...state.selectedCarts];
    const selectedCartIndex = newSelectedCartList.findIndex(
      (selectedCartItem) => selectedCartItem.id === data.id 
    );
    newSelectedCartList.splice(selectedCartIndex, 1, {
      ...state.selectedCarts[selectedCartIndex],
      quantity: data.quantity,
    })
    return {
      ...state,
      selectedCarts: newSelectedCartList
    }
  },

  [SUCCESS(ORDER_ACTION.ORDER_CART)]: (state, action) => {
    const { cartIds } = action.payload;
    const newCartList = state.cartList.data.filter(
      (cartItem) => !cartIds.includes(cartItem.id) 
      )
    return {
      ...state,
      cartList: {
        ...state.cartList,
        data: newCartList,
      },
      selectedCarts: [],
    }
  },

  [REQUEST(AUTH_ACTION.LOGOUT)]: (state, action) => {
    return {
      ...state,
      userInfo: {},
      cartList: {
        data: [],
        loading: false,
        error: null,
      },
      selectedCarts: [],
    }
  }
})

export default cartReducer;