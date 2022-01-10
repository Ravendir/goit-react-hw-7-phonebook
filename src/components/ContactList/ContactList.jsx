import React from "react";
import PropTypes from "prop-types";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts &&
        contacts.map((contact) => (
          <li className={s.item} key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button type="button" onClick={() => deleteContact(contact.id)}>
              delete
            </button>
          </li>
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
export default ContactList;
