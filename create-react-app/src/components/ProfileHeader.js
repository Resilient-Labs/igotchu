import React from 'react'
import '../css/ProfileHeader.css'
import Logo from "../img/igotchu-darkblue.png";


export const ProfileHeader = () => {
  return (
    <header>
      <img src={Logo} alt=""/>
      <button type="button">Newsfeed</button>
    </header>
  )
}