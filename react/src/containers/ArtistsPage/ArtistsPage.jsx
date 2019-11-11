import React, { Component, Fragment } from 'react';

import PageHeader from '../../components/UI/PageHeader/PageHeader';
import SearchBar from '../../components/SearchBar/SearchBar';
import ArtistCardList from '../../components/Artists/ArtistCardList/ArtistCardList';
import ButtonEdit from '../../components/UI/ButtonEdit/ButtonEdit'
import classes from './ArtistsPage.module.css';

import Backdrop from '../../components/UI/Backdrop/Backdrop';

class ArtistsPage extends Component {
  constructor(props) {
    super(props);

    console.log(props.userId)

    this.state = {
      artists: [
        { id: 1, name: 'Buffalo Tom', image: '../../assets/images/albumArt/BuffaloTom_Birdbrain.jpg' },
        { id: 2, name: 'Pavement', image: '../../assets/images/albumArt/BuffaloTom_Birdbrain.jpg' },
        { id: 3, name: 'Hazel', image: '../../assets/images/albumArt/BuffaloTom_Birdbrain.jpg' },
        { id: 4, name: 'Dinosaur Jr', image: '../../assets/images/albumArt/BuffaloTom_Birdbrain.jpg' },
        { id: 5, name: 'Sonic Youth', image: '../../assets/images/albumArt/BuffaloTom_Birdbrain.jpg' },
      ],
      pageTitle: 'Artists',
      searchField: '',
    }
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value })
  }


  render() {
    const { artists, searchField } = this.state;
    const filteredArtists = artists.filter(artist =>
      artist.name.toLowerCase().includes(searchField.toLowerCase())
    );

    console.log(this.state.artists[0].image)
    console.log("props => " + this.props)
    console.log("this.props.id => " + this.props.hasId)
    console.log("this.props.userId => " + this.props.userId)
    //images={require(artists[0].image)}
    //<img src={require(artists[0].image)} />
    //<img src={require('../../assets/images/albumArt/BuffaloTom_Birdbrain.jpg')} />
    //<img src={require(this.state.artists[0].image)} />
    return (
      <Fragment>
        <Backdrop show={true} clicked={this.props.closed} />
        <div className={classes.ArtistsPage}>
          {(this.props.hasId) ?
            <Fragment>
              <PageHeader pageTitle={this.state.pageTitle} />
              <SearchBar
                placeholder='Search Artists'
                onSearchChange={this.onSearchChange} />
              <ButtonEdit>Add Artist</ButtonEdit>
              <ArtistCardList artists={filteredArtists} />
            </Fragment>
            :
            <Fragment>
              <PageHeader pageTitle={this.state.pageTitle} />
              <SearchBar
                placeholder='Search Artists'
                onSearchChange={this.onSearchChange} />
              <ArtistCardList artists={filteredArtists} />
            </Fragment>
          }
        </div>
      </Fragment>
    );
  }
}

export default ArtistsPage;