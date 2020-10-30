import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import UserMenu from "./userMenu";

const Navigation = ({ isAuth }) => {
  return (
    <>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        {isAuth && (
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        )}
        {isAuth ? (
          <li>
            <UserMenu />
          </li>
        ) : (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </>
        )}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.token,
});

export default connect(mapStateToProps)(Navigation);
