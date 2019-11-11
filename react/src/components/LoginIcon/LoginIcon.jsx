import React from 'react'
import { Link } from 'react-router-dom';

const loginIcon = () => {
  return (
    <Link to="/login">
      <i className="fas fa-sign-in-alt" />
    </Link>
  )
}

export default loginIcon;
