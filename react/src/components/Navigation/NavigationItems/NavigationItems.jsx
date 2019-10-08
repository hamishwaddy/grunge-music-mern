import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>Albums</NavigationItem>
    <NavigationItem link="/">Artists</NavigationItem>
  </ul>
);

export default navigationItems;