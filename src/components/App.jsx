import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import ContactForm from "./ContactForm/ContactForm";
import contactsActions from "../redux/contacts/contactsActions";
import {
  fetchContacts,
  deleteContacts,
  createContacts,
} from "../redux/contacts/contactsOperatios";
import {
  getContactsFiltered,
  getFilter,
} from "../redux/contacts/contactsSelectors";

export default function App() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContactsFiltered);

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  const addContact = (name, number) => {
    const dublicate = contacts.some((c) => c.name === name);
    if (dublicate) {
      return alert(`${name} is already in contacts.`);
    }
    dispatch(createContacts({ name, number }));
  };

  const changeFilter = (e) => {
    dispatch(contactsActions.changeFilter(e.currentTarget.value));
  };

  const deleteContact = (id) => {
    dispatch(deleteContacts(id)).then(() => {
      dispatch(fetchContacts());
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>

      <Filter filter={filter} onChangeFilter={changeFilter} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
}
