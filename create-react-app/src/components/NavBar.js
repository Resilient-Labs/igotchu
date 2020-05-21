import React from 'react';
import '../css/NavBar.css';
// import navLogo from './navLogo.png'

function Navbar(){
  return(
    <div className="navBarHeader">

    <div className="navBar">
      <ul>
      {/* <img className="navLogo" src={navLogo} alt='' /> */}
        <li>
          <a href ="/">
            Home
          </a>
        </li>
        <li>
          <a href="/profile">
            Profile
          </a>
        </li>
        <li>
          <a href="/store">
            Store
          </a>
        </li>
        <li>
          <button id="postPushLeft">
            Post
          </button>
        </li>
        <li>
        <button>
            Logout
        </button>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default Navbar
