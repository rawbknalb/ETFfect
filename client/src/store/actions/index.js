import axios from "axios";
import { browserHistory } from "react-router";
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from "./types";
const API_URL = "http://localhost:3090";

export const signInUser = ({ email, password }) => dispatch => {
  // Submit email and password to the server
  axios
    .post(`${API_URL}/signin`, { email, password })
    .then(res => {
      // If request is good:
      // - Update state to indicate user is authenticated
      dispatch({ type: AUTH_USER});
      // - Save the JWT Token
      localStorage.setItem("item", res.data.token);
    })
    .catch(res => {
      // If request is bad:
      // - Show an error to the user
      authError("Ooops!");
    });
};

const authError = errorMessage => {type: AUTH_ERROR, payload: errorMessage}

export const signUpUser = ({ email, password }) => dispatch => {
  // Submit email and password to the server
  axios.post(`${API_URL}/signup`, { email, password });
  // If request is good:
  // - Update state to indicate user is authenticated
  // - Save the JWT Token
  // - Redirect to route '/portfolio'
  // If request is bad:
  // - Show an error to the user
};
