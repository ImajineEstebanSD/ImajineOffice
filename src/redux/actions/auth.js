import { ActionTypes } from '../../constants/actionTypes';
import * as api from '../../modules/api.js';

/* Logout */
export const logout = () => {
  return {
    type: ActionTypes.LOGOUT,
  };
};

/* Login Waiting */
export const loginRequest = () => {
  return {
    type: ActionTypes.LOGIN_REQUEST,
  };
};

/* Login Success */
export const loginSuccess = (payload) => {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    payload,
  };
};

/* Login Failure */
export const loginFailure = () => {
  return {
    type: ActionTypes.LOGIN_FAILURE,
  };
};

/* Sign Up Waiting */
export const signUpRequest = () => {
  return {
    type: ActionTypes.SIGN_UP_REQUEST,
  };
};

/* Sign Up Success */
export const signUpSuccess = () => {
  return {
    type: ActionTypes.SIGN_UP_SUCCESS,
  };
};

/* Sign Up Failure */
export const signUpFailure = () => {
  return {
    type: ActionTypes.SIGN_UP_FAILURE,
  };
};

/* Get Me Waiting */
export const getMeRequest = () => {
  return {
    type: ActionTypes.GET_ME_REQUEST,
  };
};

/* Get Me Success */
export const getMeSuccess = (payload) => {
  return {
    type: ActionTypes.GET_ME_SUCCESS,
    payload,
  };
};

/* Get Me Failure */
export const getMeFailure = () => {
  return {
    type: ActionTypes.GET_ME_FAILURE,
  };
};

export const login = (params) => {
  return async (dispatch) => {
    dispatch(loginRequest());

    try {
      const {
        data: { data },
      } = await api.signIn(params);

      window.location.replace('/logged');
      dispatch(loginSuccess(data));
    } catch (err) {
      dispatch(loginFailure());
    }
  };
};

export const signUp = (params) => {
  return async (dispatch) => {
    dispatch(signUpRequest());
    try {
      await api.signUp(params);

      window.location.replace('/login');
      dispatch(signUpSuccess());
    } catch (err) {
      dispatch(signUpFailure());
    }
  };
};

export const getMe = (params) => {
  return async (dispatch) => {
    dispatch(getMeRequest());
    try {
      const {
        data: { data },
      } = await api.getProfile(params);
      dispatch(getMeSuccess(data));
    } catch (err) {
      dispatch(getMeFailure());
    }
  };
};
