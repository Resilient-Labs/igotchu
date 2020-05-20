import React from 'react'
import '../css/Landing_Hero.css'
import { Landing_SectionLeft } from './Landing_SectionLeft'
import { Landing_SectionRight } from './Landing_SectionRight'


export const Profile_Hero = () => {
  return (
    <section className="hero-main">
      <Landing_SectionLeft />
      <Landing_SectionRight />
    </section>

  )
}
