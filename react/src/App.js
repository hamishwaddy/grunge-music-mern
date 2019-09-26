import React, { Fragment } from 'react';

import ShowData from './components/ShowData'
import AddData from './components/AddData'
import HeroImage from './components/Layout/HeroImage/heroImage.js'

function App() {
  return (
    <Fragment>
      <HeroImage />
      <AddData />
      <hr />
      <hr />
      <ShowData />
    </Fragment>
  );
}

export default App;