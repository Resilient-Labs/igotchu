import React from 'react';
import { ItemPageHeader } from './components/ItemPageHeader'
import { ItemPageHero } from './components/ItemPageHero'
import './css/ItemPage.css';


function ItemPage() {
    return(
        <div>
            <ItemPageHeader />
            <ItemPageHero />
        </div>
    );
}

export default ItemPage