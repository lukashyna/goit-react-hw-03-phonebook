import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './contactForm.module.css';

export default class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddContact({ ...this.state });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          Name
          <input className={styles.input} type="text" name="name" value={name} onChange={this.handleChange} />
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.input}
            type="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            name="number"
            placeholder="000-00-00"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button className={styles.submit} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
