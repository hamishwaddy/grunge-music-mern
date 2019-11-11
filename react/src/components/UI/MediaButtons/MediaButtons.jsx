import React from 'react'
import MediaButton from './MediaButton/MediaButton'

import classes from './MediaButtons.module.css'

const MediaButtons = (props) => {
  return (
    <div className={classes.MediaButtons}>
      <MediaButton
        iconClass="fa fa-backward"
        link="" />
      <MediaButton
        iconClass="fa fa-play"
        link="" />
      <MediaButton
        iconClass="fa fa-pause"
        link="" />
      <MediaButton
        iconClass="fa fa-forward"
        link="" />
    </div>
  )
}

export default MediaButtons
