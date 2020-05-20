import React, { Component } from 'react';
import userImage from "./userImage.png";
import './UserDetails.css';

class UserDetails extends Component {
  render() {
    return (
      <section className="UserDetails">
      <img className="ProfileImage" src={userImage} alt="" />
      <h3> Elmer Jr </h3>
      <h4> Location: <span> xxx </span> </h4>
      <h4> Bio: <span> xxx </span> </h4>
      </section>

    );
  }
}

export default UserDetails;
