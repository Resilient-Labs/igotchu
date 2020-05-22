import React from 'react';
// import './css/IndividualItemPage.css';
// import SingleItem from './singleItem.js'
import ItemPageSellerInfo from './components/ItemPageSellerInfo.js'
import IndividualItemImage from './components/IndividualItemImage.js'
import IndividualItemTitle from './components/IndividualItemTitle.js'
import ItemPageItemDescription from './components/ItemPageItemDescription.js'
import ItemPageContactSeller from './components/ItemPageContactSeller.js'


function IndividualItemPage() {
  return (
    <div className="individualItemContainer">
        <div className="leftSideIndividualItemContainer">
            <ItemPageSellerInfo />
            <IndividualItemImage />
        </div>
        <div className="rightSideIndividualItemContainer">
            <IndividualItemTitle />
            <ItemPageItemDescription />
            <ItemPageContactSeller />
        </div>
    </div>
  );
}

export default IndividualItemPage;
