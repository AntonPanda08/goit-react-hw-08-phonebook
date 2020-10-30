import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../components/contactForm.module.css";
import authOperations from "../redux/auth/authOperations";

class RegisterPage extends Component {
  state = {
    name: "",
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
    this.props.onRegister({ ...this.state });
    this.setState({
      name: "",
      email: "",
      password: "",
    });
  };
  render() {
    const { name, email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="What's your name?"
            required
          />
        </label>
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
          Register
        </Button>
      </form>
    );
  }
}
const mapDispatchToProps = {
  onRegister: authOperations.register,
};
export default connect(null, mapDispatchToProps)(RegisterPage);
