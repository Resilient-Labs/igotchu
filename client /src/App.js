import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SingleItem from './singleItem'
import Layout from './layout'
import SellerInfo from './sellerInfo.js'
import IndividualItemImage from './IndividualItemImage.js'
import IndividualItemTitle from './IndividualItemTitle.js'
import ItemDescription from './ItemDescription.js'
import ContactSeller from './ContactSeller.js'

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  function App() {
  return (
    <Layout className="App">
      <div className="individualItemContainer">
      <div className="leftSideIndividualItemContainer">
        {/*<SingleItem id="5"/>*/}
        <SellerInfo />
        <IndividualItemImage />
      </div>
      <div className="rightSideIndividualItemContainer">
        <IndividualItemTitle />
        <ItemDescription />
        <ContactSeller />
      </div>
      </div>
    </Layout>
  );
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        // Render the newly fetched data inside of this.state.data
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default App;
