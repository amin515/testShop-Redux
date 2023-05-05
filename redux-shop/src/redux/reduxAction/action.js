// brand actions

import axios from "axios";
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
  UPDATE_BRAND_FAILED,
  UPDATE_BRAND_SUCCESS,
  UPDATE_STATUS_FAILED,
  UPDATE_STATUS_SUCCESS,
} from "./actionTypes.js";

// get all brands
export const getAllBrand = () => async (dispatch) => {
  try {
    dispatch({ type: GET_BRANDS_REQUEST });
    await axios
      .get("http://localhost:5050/api/v1/product/brands")
      .then((res) => {
        dispatch({ type: GET_BRANDS_SUCCESS, payload: res.data.brand });
      })
      .catch((err) => {
        dispatch({ type: GET_BRANDS_FAILED, payload: err.message });
      });
  } catch (error) {
    dispatch({ type: GET_BRANDS_FAILED, payload: error.message });
  }
};

// create brands
export const createBrand =
  ({ data, setLogo, setBrandModal, setInput }) =>
  async (dispatch) => {
    try {
      dispatch({ type: CREATE_BRANDS_REQUEST });
      await axios
        .post("http://localhost:5050/api/v1/product/brands", data)
        .then((res) => {
          dispatch({ type: CREATE_BRANDS_SUCCESS, payload: res.data.brand });
          setBrandModal(false);
          setLogo(null);
          setInput("");
        })
        .catch((err) => {
          dispatch({ type: CREATE_BRANDS_FAILED, payload: err.message });
        });
    } catch (error) {
      dispatch({ type: CREATE_BRANDS_FAILED, payload: error.message });
    }
  };

// delete brands
export const deleteBrand = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_BRAND_REQUEST });
    await axios
      .delete(`http://localhost:5050/api/v1/product/brands/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_BRAND_SUCCESS, payload: id });
      })
      .catch((err) => {
        dispatch({ type: DELETE_BRAND_FAILED, payload: err.message });
      });
  } catch (error) {
    dispatch({ type: DELETE_BRAND_FAILED, payload: error.message });
  }
};

// update status
export const updateStatus =
  ({ id, status }) =>
  async (dispatch) => {
    try {
      await axios
        .put(`http://localhost:5050/api/v1/product/brands-status/${id}`, {
          status,
        })
        .then((res) => {
          dispatch({ type: UPDATE_STATUS_SUCCESS, payload: res.data.brand });
        })
        .catch((err) => {
          dispatch({ type: UPDATE_STATUS_FAILED, payload: err.message });
        });
    } catch (error) {
      dispatch({ type: UPDATE_STATUS_FAILED, payload: error.message });
    }
  };

// update brands

export const updateBrand =
  ({ id, name, photo, setBrandModal, setEdit }) =>
  async (dispatch) => {
    try {
      await axios
        .put(`http://localhost:5050/api/v1/product/brands/${id}`, {
          id,
          name,
          photo
        })
        .then((res) => {
          console.log(res.data)
          dispatch({ type: UPDATE_BRAND_SUCCESS, payload: res.data.brand });
          setBrandModal({ show: false });
          setEdit(null);
        })
        .catch((err) => {
          dispatch({ type: UPDATE_BRAND_FAILED, payload: err.message });
        });
    } catch (error) {
      dispatch({ type: UPDATE_BRAND_FAILED, payload: error.message });
    }
  };
