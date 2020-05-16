import React from 'react';
import PropTypes from 'prop-types';
import styles from './contactFilter.module.css';

const ContactFilter = ({ changeFilter, value }) => (
  <div>
    <label className={styles.findContacts}>
      Find contacts by name
      <input className={styles.findContactInput} onChange={changeFilter} value={value} type="text" name="search" />
    </label>
  </div>
);

ContactFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default ContactFilter;
