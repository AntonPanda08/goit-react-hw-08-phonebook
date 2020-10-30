import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, isAuth, ...routeProps }) => (
  <Route
    {...routeProps}
    render={(props) => {
      return isAuth ? <Component {...props} /> : <Redirect to={"/login"} />;
    }}
  />
);
const mapStateToProps = (state) => ({
  isAuth: state.auth.token,
});

export default connect(mapStateToProps)(PrivateRoute);
