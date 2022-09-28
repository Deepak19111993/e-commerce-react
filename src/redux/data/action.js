import { REQUEST_FETCH_DATA } from "../actionType";

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
// const DATALIST_REQUEST = "DATALIST_REQUEST";
// const DATALIST_SUCCESS = "DATALIST_SUCCESS";
// const DATALIST_ERROR = "DATALIST_ERROR";

// import { REQUEST_FETCH_DATA } from "../actionType";

export const addCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});
export const removeCart = (payload) => ({
  type: REMOVE_FROM_CART,
  payload,
});

export const getFetchData = (payload) => ({
  type: REQUEST_FETCH_DATA,
  payload,
});
