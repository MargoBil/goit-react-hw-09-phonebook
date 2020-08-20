import React, { Component } from "react";
import { connect } from "react-redux";

import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Section from "../components/Section/Section";
import Filter from "../components/Filter/Filter";
import operations from "../redux/actions/operations";
import authSelectors from "../redux/selectors/authSelectors";


class Contacts extends Component {
  componentDidMount() {
    // if (!this.props.isAuthenticated) {
    //   this.props.history.replace(routes.signInPage.path);
    //   return;
    // }
    this.props.onFetchContacts();
  }

  render() {
    const { contacts } = this.props;
    const visibleFilter = contacts.items.length > 1;
    const visibleList = contacts.items.length > 0;
    return (
      <>
        <Section title="Phonebook">
          <ContactForm />
          {visibleFilter && <Filter />}
        </Section>
        {visibleList && (
          <Section title="Contacts">
            <ContactList />
          </Section>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  ...state,
  isAuthenticated: authSelectors.isAuthenticated(state),
});

const mapDispatchToProps = {
  onFetchContacts: operations.fetchNames,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
