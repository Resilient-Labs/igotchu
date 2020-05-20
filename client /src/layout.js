import React from 'react'

//import my nav navBar
import Navbar from './navbar'
import SellerInfo from './sellerInfo'

const Layout = (props)=>{
  return(
    <main>
      <Navbar />
      {props.children}
    </main>
  )
}

export default Layout
