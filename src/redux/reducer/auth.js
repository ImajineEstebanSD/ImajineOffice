import { ActionTypes } from '../../constants/actionTypes';

const initialState = {
  isAuthenticated: false,
  token: null,
  profile: null,
  loading: false,
};

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    // Logout
    case ActionTypes.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        profile: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default auth;
