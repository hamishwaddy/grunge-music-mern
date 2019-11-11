import React, { Component } from 'react'

import Album from '../../components/Albums/Album/Album';
import classes from './TopFiveAlbums.module.css';

class TopFiveAlbums extends Component {
  state = {
    albums: [
      { id: 1, title: 'Soup' },
      { id: 2, title: 'Vs' },
      { id: 3, title: 'Siamese Dream' },
      { id: 4, title: 'Where You Been' },
      { id: 5, title: 'Birdbrain' },
    ]
  }

  render() {
    return (
      <div className={classes.TopFiveAlbums}>
        {this.state.albums.map(album => {
          return (
            <Album key={album.id} title={album.title} />
          );
        })
        }
      </div>
    );
  }
}

export default TopFiveAlbums;
