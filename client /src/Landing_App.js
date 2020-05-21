import React from 'react';
import logo from './logo.svg';
import { Landing_Header } from './components/Landing_Header'
import { Landing_Hero } from './components/Landing_Hero'

import './css/Landing_App.css';

function Landing_App() {
  return (
    <div>
      <Landing_Header />
      <Landing_Hero />
    </div>
  );
}

export default Landing_App;
