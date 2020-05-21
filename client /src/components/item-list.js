import React from 'react';
import Item from './item';


const Items = (props) => {
  return (
    <section>
      {props.products.map((product) =>{
        return <Item product={product} />;
      })}
    </section>
  )
}

export default Items;
