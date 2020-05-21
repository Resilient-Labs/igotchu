import React from 'react';
// import PostImage from "./postImage.jpg";
import '../css/ItemView.css';

function ItemView(){
  
    return (
      <section className="ItemPost">
          {/* <img id="ItemImage" src={PostImage} alt="" /> */}
        <section id="ItemTitle">
          <h3> Baby Clothes </h3>
          <span> Free </span>
        </section>
      </section>
    );
  }


export default ItemView;
