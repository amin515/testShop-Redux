// create shop reducers

import {

  CREATE_BRANDS_FAILED,
  CREATE_BRANDS_REQUEST,
  CREATE_BRANDS_SUCCESS,
  DELETE_BRAND_FAILED,
  DELETE_BRAND_REQUEST,
  DELETE_BRAND_SUCCESS,
  GET_BRANDS_FAILED,
  GET_BRANDS_REQUEST,
  GET_BRANDS_SUCCESS,
  
} from "../actionTypes.js";
import initialState from "../initialState";

const shopReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BRANDS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_BRANDS_SUCCESS:
      return {
        ...state,
        brands: payload,
        loading: false,
      };
    case GET_BRANDS_FAILED:
      return {
        ...state,
        brands: [],
        loading: false,
        error: payload,
      };
    case CREATE_BRANDS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_BRANDS_SUCCESS:
      return {
        ...state,
        brands: [...state.brands, payload],
        loading: false,
      };
    case CREATE_BRANDS_FAILED:
      return {
        ...state,
        brands: [],
        loading: false,
        error: payload,
      };
    case DELETE_BRAND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_BRAND_SUCCESS:
      return {
        ...state,
        brands: [...state.brands.filter((data) => data._id !== payload)],
        loading: false,
      };
    case DELETE_BRAND_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
   

    default:
      return state;
  }
};

// export
export default shopReducers;
