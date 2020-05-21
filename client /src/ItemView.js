import React, { Component } from 'react';
import PostImage from "./postImage.jpg";
import './ItemView.css';

class ItemView extends Component {
  render() {
    return (
      <section className="ItemPost">
          <img id="ItemImage" src={PostImage} alt="" />
        <section id="ItemTitle">
          <h3> Baby Clothes </h3>
          <span> Free </span>
        </section>
      </section>
    );
  }
}

export default ItemView;
