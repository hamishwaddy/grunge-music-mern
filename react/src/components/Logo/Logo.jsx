import React from 'react';

import classes from './Logo.module.css';
import grungeLogo from '../../assets/images/grunge-logo-2tone-256.png';

const logo = () => (
  <div className={classes.Logo}>
    <img src={grungeLogo} alt="Logo" />
  </div>
);

export default logo;