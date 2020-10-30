import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import authOperations from "../redux/auth/authOperations";

const UserMenu = ({ name, onLogout }) => (
  <section>
    <p>Welcome {name}</p>
    <Button variant="danger" type="submit" value="submit" onClick={onLogout}>
      {" "}
      Logout
    </Button>
  </section>
);
const mapStateToProps = (state) => ({
  name: state.auth.user.name,
});
const mapDispatchToProps = {
  onLogout: authOperations.logout,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
