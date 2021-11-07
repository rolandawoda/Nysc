import {
    LOGIN_USER,
    LOGIN_USER_FAILURE,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    LOGOUT_USER_SUCCESS
  } from "./types";
  
  export const loginUser = (username, password) => {
    return {
      type: LOGIN_USER,
      payload: {
        username,
        password,
      },
    };
  };
  
  export const loginSuccessful = payload => {
    return { 
      type: LOGIN_USER_SUCCESS,
      payload 
    }
  };
  
  export const loginFailed = error => {
    return {
      type: LOGIN_USER_FAILURE,
      error,
    };
  };
  
  export const logoutUser = () => ({ type: LOGOUT_USER });
  export const logoutUserSuccess = () => ({ type: LOGOUT_USER_SUCCESS}) 
  