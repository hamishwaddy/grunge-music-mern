import React, { Component, Fragment } from "react";
import { Link, Route } from 'react-router-dom';

import PageHeader from '../../components/UI/PageHeader/PageHeader';
import SearchBar from '../../components/SearchBar/SearchBar';
import AlbumCardList from '../../components/AlbumCardList/AlbumCardList';
import AddAlbum from '../../components/Albums/AddAlbum/AddAlbum'
import classes from './AlbumsPage.module.css';

import Backdrop from '../../components/UI/Backdrop/Backdrop';

class AlbumsPage extends Component {
  constructor(props) {
    super(props);

    console.log(props.userId)

    this.state = {
      albums: [
        { id: 1, title: 'Soup', artist: 'Blind Melon' },
        { id: 2, title: 'Vs', artist: 'Pearl Jam' },
        { id: 3, title: 'Siamese Dream', artist: 'Smashing Pumpkins' },
        { id: 4, title: 'Where You Been', artist: 'Dinosaur Jr' },
        { id: 5, title: 'Birdbrain', artist: 'Buffalo Tom' },
      ],
      pageTitle: 'Albums',
      searchField: '',
      maxAlbumsPerPage: 6
    }
  }

  closeWindow = () => {
    this.setState({})
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { albums, searchField } = this.state;
    const filteredAlbums = albums.filter(album =>
      album.title.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <Fragment>
        <Backdrop show={true} clicked={this.props.closed} />
        <div className={classes.AlbumsPage}>
          <PageHeader pageTitle={this.state.pageTitle}
            close={this.state.closeWindow} />
          <SearchBar
            placeholder='Search Albums'
            onSearchChange={this.onSearchChange} />
          {(this.props.userId === undefined) ? null :
            <Fragment>
              <Link to="/albums/add">
                <button>ADD ALBUM</button>
              </Link>
              <Route path="/albums/add" component={AddAlbum} />
            </Fragment>
          }
          <AlbumCardList albums={filteredAlbums} />
        </div>
      </Fragment>
    );
  }
}

export default AlbumsPage;