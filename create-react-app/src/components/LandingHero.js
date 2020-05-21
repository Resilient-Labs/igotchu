import React from 'react'
import '../css/LandingHero.css'
import { LandingSectionLeft } from './LandingSectionLeft'
import { LandingSectionRight } from './LandingSectionRight'


export const LandingHero = () => {
  return (
    <section className="hero-main">
      <LandingSectionLeft />
      <LandingSectionRight />
    </section>

  )
}
