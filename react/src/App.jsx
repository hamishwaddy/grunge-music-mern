import React, { Component } from 'react';

// import ShowData from './components/ShowData'
// import AddData from './components/AddData'
import './App.module.css'
import Layout from './hoc/Layout.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <Layout />
      </div>
    )
  };
}

export default App;