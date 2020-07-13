import * as actions from "../../action-types/index";
const initialState = {
  currentUser: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UserActionTypes:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
