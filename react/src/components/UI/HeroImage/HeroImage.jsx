import React from 'react';

import hero from '../../../assets/images/hero-landscape.png';
import classes from './HeroImage.module.css';

const heroImage = (props) => {
  return (
    <div className={classes.HeroImage}>
      <img src={hero} alt="AlbumArt" />
    </div>
  )
};

export default heroImage;