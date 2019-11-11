import React from 'react';
import moment from 'moment';

import classes from './ButtonBar.module.css';
import ButtonChunky from '../../UI/ButtonChunky/ButtonChunky';
import LoginIcon from '../../LoginIcon/LoginIcon';

const buttonBar = (props) => {
  const todayDate = moment().format('LL');
  const currentTime = moment().format('LT');

  return (
    <div className={classes.ButtonBar}>
      <div className={classes.Buttons}>
        <ButtonChunky link="/albums">ALBUMS</ButtonChunky>
      </div>
      <div className={classes.Buttons}>
        <ButtonChunky link="/artists">ARTISTS</ButtonChunky>
      </div>
      <div className={classes.LoginDateTime}>
        <div className={classes.Login}><LoginIcon /></div>
        <div className={classes.Time}>{currentTime}</div>
        <div className={classes._Date}>{todayDate}</div>
      </div>
    </div>
  )
}

export default buttonBar
