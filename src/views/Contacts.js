import React from "react";
import { connect } from "react-redux";

import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Section from "../components/Section/Section";
import Filter from "../components/Filter/Filter";

const Contacts = ({contacts}) => {
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
};
const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(Contacts);
