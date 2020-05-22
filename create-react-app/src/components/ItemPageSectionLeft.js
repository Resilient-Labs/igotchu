import React from 'react'
import ItemPageSellerInfo from './ItemPageSellerInfo.js'
import IndividualItemImage from './IndividualItemImage.js'
import '../css/ItemPageSectionLeft.css'

export const ItemPageSectionLeft = () => {
  return (
    <section className="ipl-main">
     <ItemPageSellerInfo />
     <IndividualItemImage />
    </section>

  )
}
