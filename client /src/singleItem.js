import React, { useState, useEffect } from 'react';
//useState - set and get state
//useEffect - its a side effect


function SingleItem(props){
  const [item, setItem] = useState({});
  useEffect(() =>
    // fetch("/singleItemRoute/${props.id}" //ask for this route from Back End)
    //   .then(res => res.json())
    //   .then(res => this.setState({ planets: res }))
    //   .catch(() => this.setState({ hasErrors: true }))
    setItem({
      name: 'Toilet Paper',
      price: 5,
      description: 'Loreum Ipsum',
      contactName: 'Leon',
      contactId: '6789237483',
      email: 'leon@resilientcoders.org',
    })
  );

  return(
    <div>
      <span>
        {item.name}<br/>
        <a class="button" href={`mailto:${item.email}`} >Contact: {item.contactName}</a>
      </span>
    </div>
  );
}

export default SingleItem
