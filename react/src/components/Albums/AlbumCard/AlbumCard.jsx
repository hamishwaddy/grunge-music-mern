import React from 'react'

import PlayButton from '../../UI/PlayButton/PlayButton';
import classes from './AlbumCard.module.css';
import BufTomBirdbrain from '../../../assets/images/albumArt/BuffaloTom_Birdbrain.jpg';

const albumCard = (props) => {
  return (
    <div className={classes.AlbumCard}>
      <img
        alt='albumart'
        src={BufTomBirdbrain}
      />
      <div className={classes.AlbumContent}>
        <h5><strong>{props.AlbumTitle}</strong></h5>
        <p>{props.ArtistName}</p>
      </div>
      <PlayButton />
    </div>
  )
}

export default albumCard;
