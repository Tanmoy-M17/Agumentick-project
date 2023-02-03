import axios from "axios";
import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_IMAGES_FAILURE,
  GET_IMAGES_REQUEST,
  GET_IMAGES_SUCCESS,
  UPDATE_DATA_FAILURE,
  UPDATE_DATA_REQUEST,
  UPDATE_DATA_SUCCESS,
  UPDATE_IMAGE_FAILURE,
  UPDATE_IMAGE_REQUEST,
  UPDATE_IMAGE_SUCCESS,
} from "./actionType";

export const getData = (params) => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  axios
    .get("https://cooperative-rose-sundress.cyclic.app/data", params)
    .then((r) => {
        console.log(r.data);
        dispatch({ type: GET_DATA_SUCCESS, payload: r.data })})
    .catch((err) => dispatch({ type: GET_DATA_FAILURE }));
};

export const UpdateData = (params) => (dispatch) => {
  dispatch({ type: UPDATE_DATA_REQUEST });
  axios
    .get("https://cooperative-rose-sundress.cyclic.app/data", params)
    .then((r) => dispatch({ type: UPDATE_DATA_SUCCESS, payload: r.data.data }))
    .catch((err) => dispatch({ type: UPDATE_DATA_FAILURE }));
};

export const getImage = (params) => (dispatch) => {
  dispatch({ type: GET_IMAGES_REQUEST });
  axios
    .get("https://cooperative-rose-sundress.cyclic.app/image", params)
    .then((r) => dispatch({ type: GET_IMAGES_SUCCESS, payload: r.data }))
    .catch((err) => dispatch({ type: GET_IMAGES_FAILURE }));
};

export const Updateimage = (params) => (dispatch) => {
  dispatch({ type: UPDATE_IMAGE_REQUEST });
  axios
    .get("https://cooperative-rose-sundress.cyclic.app/data", params)
    .then((r) => dispatch({ type: UPDATE_IMAGE_SUCCESS, payload: r.data }))
    .catch((err) => dispatch({ type: UPDATE_IMAGE_FAILURE }));
};
