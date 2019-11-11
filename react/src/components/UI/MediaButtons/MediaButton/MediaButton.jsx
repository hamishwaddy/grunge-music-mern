import React from 'react'

import classes from './MediaButton.module.css'

const MediaButton = (props) => {
  return (
    <div className={classes.MediaButton}>
      <a href={props.link}><i className={props.iconClass} /></a>
    </div>
  )
}

export default MediaButton
