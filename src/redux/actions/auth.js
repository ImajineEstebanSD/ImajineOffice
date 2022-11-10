import axios from 'axios';
import { ActionTypes } from '../../constants/actionTypes';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

/* Login */
export const login = (payload) => {
  return {
    type: ActionTypes.LOGIN,
    payload,
  };
};

/* Logout */
export const logout = () => {
  return {
    type: ActionTypes.LOGOUT,
  };
};

/* Waiting */
export const waiting = () => {
  return {
    type: ActionTypes.WAIT,
  };
};

/* Success */
export const success = (payload) => {
  return {
    type: ActionTypes.SUCCESS,
    payload,
  };
};

/* Failure */
export const failure = () => {
  return {
    type: ActionTypes.FAILURE,
  };
};

export const flow = (params) => {
  return async (dispatch) => {
    dispatch(waiting());
    try {
      const {
        data: { data },
      } = await axios({
        method: 'POST',
        url: 'http://localhost:8080/api/auth/sign-in',
        data: { email: 'estebansalvay@imajine.com', password: 'asdsadsad' },
      });
      /*
      const data = {
        user: {
          name: 'Esteban',
          lastName: 'Sal Dil',
          email: 'estebansalvay@imajine.com',
          phone: '123456',
        },
        token: 'tok_alsiugdfqigf7678',
      };*/
      await delay(5000);
      dispatch(login(data));
      //dispatch(success(data));
    } catch (err) {
      dispatch(failure());
    }
  };
};
