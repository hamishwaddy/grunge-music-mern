import React, { Fragment } from 'react';

import ShowData from './components/ShowData'
import AddData from './components/AddData'

function App() {
  return (
    <Fragment>
      <AddData />
      <hr />
      <hr />
      <ShowData />
    </Fragment>
  );
}

export default App;