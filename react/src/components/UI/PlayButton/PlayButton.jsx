import React from 'react'

import classes from './PlayButton.module.css';

const PlayButton = (props) => {
  return (
    <div className={classes.PlayButton}>
      <i className="fa fa-play"></i>
    </div>
  )
}

export default PlayButton;
