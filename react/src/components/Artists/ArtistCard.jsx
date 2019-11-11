import React from 'react';

import PlayButton from '../UI/PlayButton/PlayButton';
import BufTomBirdbrain from '../../assets/images/albumArt/BuffaloTom_Birdbrain.jpg';
import classes from './ArtistCard.module.css';

const artistCard = (props) => {

  console.log(props.ArtistImage)

  return (
    <div className={classes.ArtistCard}>
      <img
        alt='albumart'
        src={BufTomBirdbrain} //props.ArtistImage
      />
      <div className={classes.ArtistContent}>
        <h5><strong>{props.ArtistName}</strong></h5>
      </div>
      <PlayButton />
    </div>
  )
}

export default artistCard;
