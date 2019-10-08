import React, { Component, Fragment } from 'react';

import HeroImage from '../components/UI/HeroImage/HeroImage.jsx';
import Toolbar from '../components/Navigation/Toolbar/Toolbar.jsx';
import SideDrawer from '../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: true
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false })
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer }
    })
  }


  render() {
    return (
      <Fragment>

        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler} />
        <div>Top 5 Albums</div>
        <div>
          <div>Navigation Buttons</div>
          <div>Date/Time</div>
          <div>Login</div>
        </div>
      </Fragment>
    );
  }
};

export default Layout;