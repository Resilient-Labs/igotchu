import React from 'react';

const Item = (props) => {
    const {item, description, price, sku} = props.product;
  return(
    <section>
      <p>{title}</p>
      <p>Price: {price}</p>
      <p>Description:{description}</p>
      <p>sku:{sku}</p>
    </section>
  )
}

export default Item; 
