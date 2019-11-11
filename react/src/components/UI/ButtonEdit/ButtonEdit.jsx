import React from 'react'

import classes from './ButtonEdit.module.css'

const ButtonEdit = (props) => {
  return (
    <div className={classes.ButtonEdit}>
      <button to={props.link}>EDIT</button>
    </div>
  )
}

export default ButtonEdit
