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
    // Logout
    case ActionTypes.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null,
        loading: false,
      };

    // Login
    //
    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    //
    case ActionTypes.LOGIN_SUCCESS: {
      const { token } = payload;
      return {
        ...state,
        isAuthenticated: true,
        token,
        loading: false,
      };
    }
    //
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
      };

    //SIGN IN
    case ActionTypes.SIGN_UP_REQUEST:
      return {
        ...state,
        isAuthenticated: true,
        loading: true,
      };
    //
    case ActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    //
    case ActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        loading: false,
      };

    //GET ME
    case ActionTypes.GET_ME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    //
    case ActionTypes.GET_ME_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
      };

    //
    case ActionTypes.GET_ME_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default auth;
