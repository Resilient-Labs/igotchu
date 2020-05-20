import React, { Component } from 'react';
import './App.css';
import SectionMain from './SectionMain';
import Footer from './Footer';
import Filter from './Filter';
import UserDetails from './UserDetails'

class App extends Component {

  render() {
    return (
      <div className="App">
            <UserDetails/>
        <Filter></Filter>
        <SectionMain/>
        <Footer></Footer>

      </div>
    );
  }
}

export default App;
