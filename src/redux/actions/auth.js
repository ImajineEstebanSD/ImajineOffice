import { ActionTypes } from '../../constants';

/* Logout */
export const logout = () => {
  return {
    type: ActionTypes.LOGOUT,
  };
};
