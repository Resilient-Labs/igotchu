import React from 'react';
import './css/App.css';
// import LoginPage from "./LoginPage";
import LandingPage from "./LandingPage"
// import Layout from "./layout"
// import SellerInfo from "./sellerInfo"
// import IndividualItemImage from "./components/IndividualItemImage"
// import IndividualItemTitle from "./components/IndividualItemTitle"
// import ItemDescription from "./components/ItemDescription"
// import ContactSeller from "./components/ContactSeller"
// import SectionMain from './SectionMain';
// import Footer from './components/Footer';
// import Filter from './components/Filter';
// import UserDetails from './UserDetails'
// import ProfilePage from './ProfilePage'
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
        {/* <Route exact path="/ProfilePage">
            <ProfilePage/>
        </Route> */}
        </Switch>
        <Route exact path="/">
        <LandingPage/>
        </Route>
      {/* <Layout>
      <div className="individualItemContainer">
        <div className="leftSideIndividualItemContainer">
            <Filter/>
            <SellerInfo />
            <IndividualItemImage />
            <ContactSeller />
            <UserDetails/>
            <ItemDescription />
            <SectionMain/>
            <ItemView/>
        </div>
        <div className="rightSideIndividualItemContainer">
            <IndividualItemTitle />
        </div>
            <Footer/>
      </div>
    </Layout> */}
    </div>
</Router>
  );
}

export default App;
