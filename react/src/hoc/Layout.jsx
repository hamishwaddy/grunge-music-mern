import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import HeroImage from '../components/UI/HeroImage/HeroImage.jsx';
import Toolbar from '../components/Navigation/Toolbar/Toolbar.jsx';
import SideDrawer from '../components/Navigation/SideDrawer/SideDrawer';
import ButtonBar from '../components/Navigation/ButtonBar/ButtonBar';
import TopFiveAlbums from '../containers/TopFiveAlbums/TopFiveAlbums';
import AlbumsPage from '../containers/AlbumsPage/AlbumsPage';
import ArtistsPage from '../containers/ArtistsPage/ArtistsPage';
import AlbumFullDetailsPage from '../components/Albums/AlbumFullDetailsPage/AlbumFullDetailsPage.jsx';
import Login from '../components/Login/Login'

class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showSideDrawer: true,
      hasId: false,
      currentId: ''
    }
  }

  hasId() {
    // console.log(user)
    let params = (new URL(document.location)).searchParams;
    console.log("params => " + params)
    let id = params.get('id');
    console.log("id => " + id)
    if (id != null) {
      return this.setState({ hasId: true, currentId: id })
    }
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false })
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer }
    })
  }

  componentDidMount() {
    this.hasId();
  }


  render() {
    console.log(this.state.currentId);

    return (
      <Fragment>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler} />
        <section style={{ height: '66vh', backgroundColor: 'gray', verticalAlign: 'middle' }}>
          <HeroImage />
        </section>
        <TopFiveAlbums />
        <ButtonBar />
        {(this.state.hasId) ?
          <Fragment>
            <Route path='/albums' render={(props) => <AlbumsPage {...props} userId={this.state.currentId} />} />
            <Route path='/artists' render={(props) => <ArtistsPage {...props} userId={this.state.currentId} />} />
            <Route path='/album' render={(props) => <AlbumFullDetailsPage {...props} userId={this.state.currentId} />} />
          </Fragment>
          :
          <Fragment>
            <Route path="/albums" exact component={AlbumsPage} />
            <Route path="/artists" exact component={ArtistsPage} />
            <Route path="/album" component={AlbumFullDetailsPage} />
            <Route path="/login" component={Login} />
          </Fragment>
        }
      </Fragment>
    );
  }
};

export default Layout;