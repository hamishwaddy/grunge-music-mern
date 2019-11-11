import React from 'react'

import classes from './SearchBar.module.css';

const searchBar = (props) => (
  <input
    className={classes.SearchBar}
    type='search'
    placeholder={props.placeholder}
    onChange={props.onSearchChange}
  />
)

export default searchBar;
