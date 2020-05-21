import React from 'react';
// import logo from './logo.svg';
import { LandingHeader } from './components/LandingHeader'
import { LandingHero } from './components/LandingHero'

import './css/LandingPage.css';

function LandingPage() {
  return (
    <div>
      <LandingHeader />
      <LandingHero />
    </div>
  );
}

export default LandingPage;
