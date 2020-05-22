import React from 'react';
import IndividualItemTitle from './IndividualItemTitle.js'
import ItemPageItemDescription from './ItemPageItemDescription.js'
import ItemPageContactSeller from './ItemPageContactSeller.js'

export const ItemPageSectionRight = () => {
    return (
      <section className="ipr-main">
        <IndividualItemTitle />
        <ItemPageItemDescription />
        <ItemPageContactSeller />
      </section>
  
    )
  }