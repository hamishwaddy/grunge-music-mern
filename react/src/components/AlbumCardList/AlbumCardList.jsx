import React from 'react';

import AlbumCard from '../Albums/AlbumCard/AlbumCard';
import classes from './AlbumCardList.module.css';

const albumCardList = (props) => {
  return (
    <div className={classes.AlbumCardList}>
      {props.albums.map(album => {
        return (
          <AlbumCard
            key={album.id}
            AlbumTitle={album.title}
            ArtistName={album.artist}>
          </AlbumCard>
        )
      })}
    </div>
  )
}

export default albumCardList;
