import React from 'react'
import '../css/NewsfeedHeader.css'
import Logo from "../img/igotchu-darkblue.png";


export const NewsfeedHeader = () => {
  return (
    <header>
      <img src={Logo} alt=""/>
      <button type="button">Profile</button>
    </header>
  )
}