import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ component: Component, token, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (token ? <Redirect to="/" /> : <Component {...props} />)}
  />
);

export default AuthRoute;
