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
      console.log('entre 1');
      const data = {
        user: {
          name: 'Esteban',
          lastName: 'Sal Dil',
          email: 'estebansalvay@imajine.com',
          phone: '123456',
        },
        token: 'tok_alsiugdfqigf7678',
      };
      console.log('entre 2');
      await delay(5000);
      console.log('entre 3');
      dispatch(login(data));
      console.log('entre 4');
      //dispatch(success(data));
    } catch (err) {
      dispatch(failure());
    }
  };
};
