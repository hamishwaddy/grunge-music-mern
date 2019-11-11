import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Logo.module.css';
import grungeLogo from '../../assets/images/grunge-logo-2tone-256.png';

const logo = (props) => (
  <Link to="/">
    <div className={classes.Logo}>
      <img src={grungeLogo} alt="Logo" />
    </div>
  </Link>
);

export default logo;