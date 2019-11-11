import React from 'react'
import { Link } from 'react-router-dom';

//import classes from './CloseWindow.module.css'

const CloseWindow = (props) => {
  return (
    <Link to="/">
      <i className="fa fa-window-close" />
    </Link>
  )
}

export default CloseWindow
