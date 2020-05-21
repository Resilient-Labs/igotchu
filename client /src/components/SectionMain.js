import React, { Component } from 'react';
import './SectionMain.css';
import ItemView from './ItemView'
class SectionMain extends Component {
  render() {
    return (
        <section className="SectionMain">
            <ItemView/>
              <ItemView/>
                <ItemView/>
                <ItemView/>
                  <ItemView/>
                    <ItemView/>
        </section>

    );
  }
}

export default SectionMain;
