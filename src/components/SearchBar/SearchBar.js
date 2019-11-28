import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './SearchBar.module.css';

export default class SearchBar extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  handelChange = e => {
    this.setState({ query: e.target.value });
  };

  handelSubmit = e => {
    e.preventDefault();

    const { query } = this.state;
    this.props.onSearch(query);

    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <header className={s.SearchBar}>
        <form onSubmit={this.handelSubmit} className={s.SearchForm}>
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.SearchForm_button__label}>Search</span>
          </button>

          <input
            value={query}
            onChange={this.handelChange}
            className={s.SearchForm_input}
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
