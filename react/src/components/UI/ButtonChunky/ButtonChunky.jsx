import React from 'react'
import { Link } from 'react-router-dom';

import classes from './ButtonChunky.module.css';

//{props.children}

const ButtonChunkie = (props) => {
  return (
    <Link to={props.link}>
      <button className={classes.ButtonChunky}>{props.children}</button>
    </Link>
  )
}

export default ButtonChunkie;
