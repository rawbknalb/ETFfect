import React from "react";
import { Route, Redirect } from "react-router";

const ProtectedRoute = (props) => 
  props.isAuthenticated 
    ? <Route path={props.path} component={props.component} /> 
    : <Redirect push to="/signin" />

export default ProtectedRoute;
