import React from 'react'

import classes from './ButtonDelete.module.css'

const ButtonDelete = (props) => {
  return (
    <div className={classes.ButtonDelete}>
      <button to={props.link}>DELETE</button>
    </div>
  )
}

export default ButtonDelete
