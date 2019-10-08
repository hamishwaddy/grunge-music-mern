import React from 'react'

import alternativeLogo from '../../assets/images/grunge-square.png';
import classes from './Logo.module.css';

const squareLogo = () => {
  return (
    <div className={classes.Logo}>
      <img src={alternativeLogo} alt="Logo" />
    </div>
  )
}

export default squareLogo
