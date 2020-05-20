import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
  render() {
    return (
      <form className='FilterForm' >
      <input  className= "Filter" placeholder="Filter Results"></input>
      <button>Submit</button>
      </form>

    );
  }
}

export default Filter;
