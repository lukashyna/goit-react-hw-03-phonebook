import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './contactListItem';
import styles from './contactList.module.css';

const ContactList = ({ contacts, removeContact }) => (
  <ul className={styles.contactList}>
    {contacts.map(contact => (
      <li className={styles.contactListItem} key={contact.id}>
        <ContactListItem removeContact={() => removeContact(contact.id)} contact={contact} />
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })).isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default ContactList;
