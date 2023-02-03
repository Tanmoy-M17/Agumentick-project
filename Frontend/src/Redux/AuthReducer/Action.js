import axios from "axios";

import {
  ADDADMIN_FAILURE,
  ADDADMIN_REQUEST,
  ADDADMIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_FAILURE,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_SIGNUP_FAILURE,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "./ActionType";
export const login = (payload) => (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });
  return axios({
    method: "post",
    url: "http://localhost:8080/user/login",
    data: payload,
  })
    .then((r) => {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: r.data });
    })
    .catch((err) => dispatch({ type: USER_LOGIN_FAILURE,payload:err.response.data.message }));
};

export const Signupuser = (payload) => (dispatch) => {
  dispatch({ type: USER_SIGNUP_REQUEST });
  return axios({
    method: "post",
    url: "http://localhost:8080/user/register",
    data: payload,
  })
    .then((r) => {
      dispatch({ type: USER_SIGNUP_SUCCESS, payload: r.data });
    })
    .catch((err) => dispatch({ type: USER_SIGNUP_FAILURE }));
};

export const logout = (payload) => (dispatch) => {
  dispatch({ type: USER_LOGOUT_REQUEST });
  return axios
    .get("http://localhost:8080/user/logout", {
      headers: {
        auth: payload,
      },
    })
    .then((r) => {
      dispatch({ type: USER_LOGOUT_SUCCESS, payload: r.data });
    })
    .catch((err) => dispatch({ type: USER_LOGOUT_FAILURE }));
};

export const AddAdmin =
  ({ data, auth }) =>
  (dispatch) => {
    dispatch({ type: ADDADMIN_REQUEST });
    return axios
      .post("http://localhost:8080/user/addadmin", data, {
        headers: {
          auth: auth,
        },
      })
      .then((r) => {
        dispatch({ type: ADDADMIN_SUCCESS, payload: r.data });
      })
      .catch((err) => dispatch({ type: ADDADMIN_FAILURE }));
  };
