import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import classes from './AddAlbum.module.css'
// import Backdrop from '../../UI/Backdrop/Backdrop'
// import PageHeader from '../../UI/PageHeader/PageHeader'

const uuidv4 = require('uuid/v4');

const PostToDB = (data) => {

  //e.preventdefault();

  console.log(data);
  //   fetch('http://localhost:5002/api/albums', {
  //     method: 'POST',
  //     body: JSON.stringify({ _id: uuidv4(), album: data }),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }).then(res => res.json())
  //     .then(response => {

  //       console.log('Success:', JSON.stringify(response))

  //     })
  //     .catch(error => console.error('Error:', error));
}

const AddAlbum = (props) => {
  return (
    <Fragment className={classes.AddAlbum}>
      {/*<Backdrop show={true} clicked={props.closed} />
        <div>
          <PageHeader pageTitle="Add Album" />
    </div> */}
      <div>
        <form>
          <label>Album</label>
          <input type="text" id="inputTitle" placeholder="Album Title" />
          <input type="text" id="inputArtist" placeholder="Artist" />
          <input type="text" id="inputReleaseYear" placeholder="Release Year" />
          <input type="text" id="inputRecordLabel" placeholder="Record Label" />
          <input type="text" id="inputAlbumArt" placeholder="Album Art URL" />

          <button type="submit" onClick={PostToDB()} >Submit</button>

        </form>
      </div>
    </Fragment>
  )
}


export default AddAlbum
