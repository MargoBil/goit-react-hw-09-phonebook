import React, {Component} from 'react';
import {connect} from 'react-redux';

import operations from '../redux/actions/authOperations';

import s from '../components/ContactForm/ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

class RegisterView extends Component {
  state = INITIAL_STATE;

  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogup({...this.state});
    this.setState({...INITIAL_STATE});
  };

  handleChange = ({target}) => {
    const {name, value} = target;
    this.setState({[name]: value});
  };

  render() {
    const {themeColor} = this.props.theme;
    const {name, email, password} = this.state;
    return (
      <div className={s.signBox}>
        <form className={s[`form${themeColor}`]} onSubmit={this.handleSubmit}>
          <label className={s[`label${themeColor}`]}>
            Name
            <input
              className={s.input}
              type="text"
              value={name}
              name="name"
              onChange={this.handleChange}
            />
          </label>
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
            Password
            <input
              className={s.input}
              type="password"
              value={password}
              name="password"
              onChange={this.handleChange}
            />
          </label>
          <button className={s[`btnForm${themeColor}`]} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  onLogup: operations.logUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);
