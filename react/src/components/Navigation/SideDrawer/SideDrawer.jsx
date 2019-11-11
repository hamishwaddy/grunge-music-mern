import React, { Fragment } from 'react';

import classes from './SideDrawer.module.css';
import SquareLogo from '../../Logo/SquareLogo';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Fragment>

      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <SquareLogo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  )
};

export default sideDrawer;