import React, {Component} from 'react';
import {connect} from 'react-redux';
import InputMask from 'react-input-mask';
import operations from '../../redux/actions/operations';

import AlertSameName from './AlertSameName';


import s from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
  alert: false
};

class ContactForm extends Component {
  state = {...INITIAL_STATE};

  handleSubmit = e => {
    e.preventDefault();
    const {items} = this.props.contacts;
    const {name} = this.state;
    const identityCheckName = items.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
    );
    if (!identityCheckName) {
      this.props.onAddName(this.state);
      this.setState({...INITIAL_STATE});
    } else {
      this.setState({...INITIAL_STATE, alert: true}, () => setTimeout(this.handleAlertOfSameName, 2000),);
    }
  };

  handleChange = ({target}) => {
    const {name, value} = target;
    this.setState({[name]: value});
  };

  handleAlertOfSameName = () => {
    this.setState({
      alert: false,
    });
  }

  render() {
    const {themeColor} = this.props.theme;
    const {name, number, alert} = this.state;
    return (
      <>
      {alert && <AlertSameName/>}
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
          Number
          <InputMask
            className={s.input}
            mask="999-99-99"
            maskChar=" "
            value={number}
            name="number"
            onChange={this.handleChange}
          />
        </label>
        <button className={s[`btnForm${themeColor}`]} type="submit">
          ADD CONTACT
        </button>
      </form>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
  };
};

const mapDispatchToProps = {
  onAddName: operations.addName,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
