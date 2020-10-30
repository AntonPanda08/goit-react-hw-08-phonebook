import React, { Component, Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Spinner from "./components/spinner";
import PrivateRoute from "./components/privateRoutes";
import PublicRoute from "./components/publicRoute";
import { connect } from "react-redux";
import Navigation from "./components/navigation";
import authOperations from "./redux/auth/authOperations";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    const { isAuth } = this.props;
    return (
      <>
        <Navigation />

        <Suspense fallback={<Spinner />}>
          <Switch>
            <PublicRoute
              path="/"
              exact
              restricated={false}
              component={lazy(() =>
                import("./views/home.js" /*webpackChunkName:'home-view'*/)
              )}
            />
            <PrivateRoute
              path="/contacts"
              exact
              component={lazy(() =>
                import(
                  "./views/Phonebook" /*webpackChunkName:'phonebook-view'*/
                )
              )}
            />
            <PublicRoute
              path="/login"
              exact
              restricated={true}
              component={lazy(() =>
                import("./views/login" /*webpackChunkName:'login-view'*/)
              )}
            />
            <PublicRoute
              path="/register"
              exact
              restricated={true}
              component={lazy(() =>
                import("./views/register" /*webpackChunkName:'register-view'*/)
              )}
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.token,
});
const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
