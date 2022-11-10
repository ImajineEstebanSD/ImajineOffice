import { ActionTypes } from '../../constants/actionTypes';

const initialState = {
  isAuthenticated: false,
  token: null,
  user: {
    name: null,
    lastName: null,
    email: null,
    password: null,
    phone: null,
  },
  loading: false,
};

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    // Login
    case ActionTypes.LOGIN:
      const { token, user } = payload;
      return {
        ...state,
        isAuthenticated: true,
        token,
        user,
        loading: false,
      };
    // Logout
    case ActionTypes.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null,
        loading: false,
      };

    //
    case ActionTypes.WAIT:
      return {
        ...state,
        loading: true,
      };
    //
    case ActionTypes.SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token,
        user,
        loading: false,
      };
    //
    case ActionTypes.FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default auth;
