import React from 'react'

import classes from './AlbumFullDetailsPage.module.css'
//import CloseWindow from '../../UI/CloseWindow/CloseWindow'
import ButtonEdit from '../../UI/ButtonEdit/ButtonEdit'
import ButtonDelete from '../../UI/ButtonDelete/ButtonDelete'
import BufTomBigRed from '../../../assets/images/albumArt/BuffaloTom_BigRedLetterDay_400x400.jpg'
import MediaButtons from '../../UI/MediaButtons/MediaButtons'

const AlbumFullDetailsPage = (props) => {
  return (
    <div className={classes.AlbumFullDetails}>
      {/*<div className={classes.CloseWindow}>
        <CloseWindow />
  </div>*/}
      <div className={classes.Left}>
        <div>
          <img src={BufTomBigRed} alt="Album Art" classname={classes.AlbumArt} />
        </div>
        <div className={classes.MediaButtons}>
          <MediaButtons />
        </div>
      </div>
      <div className={classes.Right}>
        <div className={classes.AlbumInfo}>
          <h4>Album Title</h4>
          <p>Release Year</p>
          <h5>Artist Name</h5>
          <p>Album Description Aenean fermentum ut risus id dignissim. Vestibulum sit amet nulla leo. Phasellus dolor eros, convallis id ligula in, vulputate venenatis dolor. Nulla in mi et lorem interdum aliquet eget nec dui. Nunc non congue arcu. Suspendisse et nunc congue, varius est in, cursus tellus. Proin blandit vestibulum mi in vehicula.</p>
          <img src="" alt="Record Label" />
          <div className={classes.EditDeleteButtons}>
            <ButtonEdit />
            <ButtonDelete />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlbumFullDetailsPage
