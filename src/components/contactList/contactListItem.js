import React from 'react';
import PropTypes from 'prop-types';
import styles from './contactListItem.module.css';

const ContactListItem = ({ contact, removeContact }) => (
  <>
    <div>
      <span>{contact.name} </span>
      <span>{contact.number}</span>
    </div>
    <button className={styles.delete} onClick={removeContact} type="button">
      Delete
    </button>
  </>
);
ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  removeContact: PropTypes.func.isRequired,
};
export default ContactListItem;
