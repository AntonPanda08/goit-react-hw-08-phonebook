import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../components/contactForm.module.css";
import authOperations from "../redux/auth/authOperations";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onLogin({ ...this.state });
    this.setState({
      email: "",
      password: "",
    });
  };
  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="What's your email?"
            required
          />
        </label>

        <label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="What's your password?"
            required
          />
        </label>

        <Button variant="info" type="submit" value="submit">
          {" "}
          Login
        </Button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.login,
};
export default connect(null, mapDispatchToProps)(LoginPage);
