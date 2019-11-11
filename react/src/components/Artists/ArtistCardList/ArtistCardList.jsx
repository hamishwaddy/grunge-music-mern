import React from 'react';

import ArtistCard from '../ArtistCard';
import classes from './ArtistCardList.module.css';
// import album from '../../Albums/Album/Album';

const artistCardList = (props) => {
  console.log(props.ArtistName)
  return (
    <div className={classes.ArtistCardList}>
      {props.artists.map(artist => {
        return (
          <ArtistCard
            key={artist.id}
            ArtistName={artist.name}
            ArtistImage={artist.image}
          >
          </ArtistCard>
        )
      })}
    </div>
  )
}

export default artistCardList;
