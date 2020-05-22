import React from 'react'
import '../css/ItemPageHero.css'
import { ItemPageSectionLeft } from './ItemPageSectionLeft'
import { ItemPageSectionRight } from './ItemPageSectionRight'

export const ItemPageHero = () => {
    return (
      <section className="itempage-hero-main">
        <ItemPageSectionLeft />
        <ItemPageSectionRight />
      </section>
  
    )
  }
  