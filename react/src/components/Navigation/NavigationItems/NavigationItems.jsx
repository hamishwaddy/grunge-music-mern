import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/albums">Albums</NavigationItem>
    <NavigationItem link="/artists">Artists</NavigationItem>
  </ul>
);

export default navigationItems;