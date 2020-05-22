import React from 'react'
import '../css/ItemPageHeader.css'
import Logo from "../img/igotchu-darkblue.png";


export const ItemPageHeader = () => {
  return (
    <header className="itemHeader">
      <img src={Logo} alt=""/>
      <div>
        <button type="button">Newsfeed</button>
        <button type="button">Profile</button> 
      </div>

    </header>
  )
}