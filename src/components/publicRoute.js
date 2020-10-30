import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PublicRoute = ({
  component: Component,
  isAuth,
  restricated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) => {
      return isAuth && restricated ? (
        <Redirect to={"/contacts"} />
      ) : (
        <Component {...props} />
      );
    }}
  />
);
const mapStateToProps = (state) => ({
  isAuth: state.auth.token,
});

export default connect(mapStateToProps)(PublicRoute);
