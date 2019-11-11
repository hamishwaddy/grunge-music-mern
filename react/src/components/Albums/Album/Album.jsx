import React from 'react';

import BufTomBirdbrain from '../../../assets/images/albumArt/BuffaloTom_Birdbrain.jpg';
import classes from './Album.module.css';

const album = (props) => {
  return (
    <div className={classes.Album}>
      <img
        alt="AlbumArt"
        src={BufTomBirdbrain}
      />
      {/*<p>{props.title}</p>*/}
    </div>
  )
}

export default album;
