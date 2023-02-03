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

const initialState = {
  isAuth: false,
  id:"",
  token: "",
  role: "",
  message: "",
  isLoading: false,
  isError: false,
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_SIGNUP_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case USER_SIGNUP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: payload.message,
      };
    }
    case USER_SIGNUP_FAILURE: {
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        isError: true,
        token: "",
      };
    }
    case USER_LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        isError: false,
        id:payload.id,
        token: payload.token,
        role: payload.role,
        message: payload.message,
      };
    }
    case USER_LOGIN_FAILURE: {
      console.log(payload);
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        isError: true,
        token: "",
        message:payload
      };
    }
    case USER_LOGOUT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case USER_LOGOUT_SUCCESS: {
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        isError: false,
        role: "",
        token: "",
        message: payload.message,
      };
    }
    case USER_LOGOUT_FAILURE: {
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        isError: true,
      };
    }
    case ADDADMIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case ADDADMIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: payload.message,
      };
    }
    case ADDADMIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default: {
      return { ...state };
    }
  }
};
