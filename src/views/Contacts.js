import React, { Component } from "react";
import { connect } from "react-redux";

import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Section from "../components/Section/Section";
import Filter from "../components/Filter/Filter";
import operations from "../redux/actions/operations";

class Contacts extends Component {
  componentDidMount() {
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
});

const mapDispatchToProps = {
  onFetchContacts: operations.fetchNames,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
