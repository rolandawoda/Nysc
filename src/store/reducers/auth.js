import {
    LOGIN_USER,
    LOGIN_USER_FAILURE,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER_SUCCESS,
  } from "../actions/types";
  
  const INIT_STATE = {
    isLoggedIn: false,
    profile: null,
    isLoading: false,
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case LOGIN_USER:
        return { isLoading: true };
      case LOGIN_USER_SUCCESS:
        return {
            ...state,
            isLoggedIn: true,
        }
      case LOGIN_USER_FAILURE:
        return {
          ...state,
          isLoading: false,
        };
      case LOGOUT_USER_SUCCESS:
        return INIT_STATE;
      default:
        return state;
    }
  };

  