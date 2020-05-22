import React from 'react';
import './css/App.css';
import LoginPage from "./LoginPage";
import LandingPage from "./LandingPage"
// import NavBar from "./components/NavBar"
// import Layout from "./layout"
// import SellerInfo from "./sellerInfo"
// import IndividualItemImage from "./components/IndividualItemImage"
// import IndividualItemPage from "./IndividualItemPage"
// import IndividualItemTitle from "./components/IndividualItemTitle"
// import ItemDescription from "./components/ItemDescription"
// import ContactSeller from "./components/ContactSeller"
// import SectionMain from './SectionMain';
// import Footer from './components/Footer';
// import Filter from './components/Filter';
// import UserDetails from './UserDetails'
import ItemPage from './ItemPage'
import Newsfeed from './Newsfeed'
import ProfilePage from './ProfilePage'
// import ItemView from './components/ItemView'

// import {ThemeProvider} from 'styled-components'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // HashRouter
} from "react-router-dom";

function App() {
  return (
<Router>
<div className="App">   
      <Switch>
        <Route exact path="/">
          <LandingPage/>
        </Route>
        <Route exact path="/Login">
          <LoginPage/>
        </Route>
        <Route exact path="/Newsfeed">
          <Newsfeed />
        </Route>
        <Route exact path="/ItemPage">
          {/* <NavBar/ > */}
          <ItemPage />
        </Route>
        <Route exact path="/Profile">
          {/* <NavBar/ > */}
          <ProfilePage/>
          {/* <MailToPage/>
          <FeedSectionMain/>
          <ItemPageSellerInfo />
          <ItemPageItemDescription />
          <ItemView/>
          <ItemPageContactSeller />
          <NewsFeedFilter/>
          <IndividualItemTitle /> */}
        </Route>
      </Switch>
    
      <div>
        <div className="individualItemContainer">
          <div className="leftSideIndividualItemContainer">
          </div>
          <div className="rightSideIndividualItemContainer">
          </div>
            {/* <Footer/> */}
          </div>
        </div>
      </div>
</Router>
  );
}

export default App;
