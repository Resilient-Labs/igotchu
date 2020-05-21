import React from 'react';
import './navbar.css';
// import logo from '..public/igotchu-darkblue.png'
// write my navbar component

function Navbar(){
  return(
    <div className="navBar">
      <ul>
        <li>
          <a href="https://www.bbc.com/weather">
            Newsfeed
          </a>
        </li>
        <li>
          <a href="https://www.bbc.com/weather">
            Profile
          </a>
        </li>
        <li>
          <a href="https://www.bbc.com/weather">
            Store
          </a>
        </li>
        <li>
          <a href="https://www.bbc.com/weather">
            + Post
          </a>
        </li>
        <li>
          <a href="https://www.bbc.com/weather">
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar
