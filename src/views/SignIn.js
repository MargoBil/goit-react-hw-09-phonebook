import React, { Component } from "react";
import { connect } from "react-redux";

import operations from '../redux/actions/authOperations';

import s from "../components/ContactForm/ContactForm.module.css";

const INITIAL_STATE = {
  email: "",
  password: "",
};

class RegisterView extends Component {
  state = { ...INITIAL_STATE };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSignIn({...this.state});
    this.setState({ ...INITIAL_STATE });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { themeColor } = this.props.theme;
    const { email, password } = this.state;
    return (
      <form className={s[`form${themeColor}`]} onSubmit={this.handleSubmit}>
        <label className={s[`label${themeColor}`]}>
          E-mail
          <input
            className={s.input}
            type="email"
            value={email}
            name="email"
            onChange={this.handleChange}
          />
        </label>
        <label className={s[`label${themeColor}`]}>
          password
          <input
            className={s.input}
            type="password"
            value={password}
            name="password"
            onChange={this.handleChange}
          />
        </label>
        <button className={s[`btnForm${themeColor}`]} type="submit">
          Sign In
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => state;

  const mapDispatchToProps = {
    onSignIn: operations.logIn,
  };

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);
