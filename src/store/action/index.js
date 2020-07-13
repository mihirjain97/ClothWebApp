import * as actions from "../action-types/index";

export const setCurrentUser = (user) => ({
  type: actions.UserActionTypes,
  payload: user,
});
