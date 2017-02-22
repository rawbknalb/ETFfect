import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from "../../actions/types";

const initialState = { isAuthenticated: false };

const auth_reducer = (initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, isAuthenticated: true, errorMessage: "" };
    case UNAUTH_USER:
      return { ...state, isAuthenticated: false, errorMessage: "" };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default auth_reducer;
