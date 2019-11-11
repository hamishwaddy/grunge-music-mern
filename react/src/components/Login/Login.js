import React, { Fragment } from 'react'
import PageHeader from '../../components/UI/PageHeader/PageHeader';
import classes from '../../containers/ArtistsPage/ArtistsPage.module.css';

import Backdrop from '../../components/UI/Backdrop/Backdrop';

const checkLogin = (e) => {

  e.preventDefault();

  const username = document.querySelector('#un1').value;
  const password = document.querySelector('#pw1').value;

  fetch('http://localhost:5002/api/users')
    .then(resp => resp.json())
    .then(data => {

      let user = data["user"].filter(d => d["name"] === username && d["password"] === password)
      console.log(user)
      console.log((user.length === 1) ? 1 : 0)

      window.location.href = `http://localhost:3000?id=${user[0]["_id"]}`

    })

  //console.log(username)
  //console.log(password)
}

const Login = (props) => {
  return (
    <Fragment>
      <Backdrop show={true} clicked={props.closed} />
      <div className={classes.ArtistsPage}>
        <PageHeader pageTitle={"Login Screen"} />

        {/* form start */}

        <form method="POST" action="#" >
          <input type="text" id="un1" placeholder="username" />
          <input type="text" id="pw1" placeholder="password" />
          <input type="submit" value="Login" onClick={checkLogin} />
        </form>

        {/* form end */}

      </div>
    </Fragment>
  )
}

export default Login;

