import React from 'react'

import './About.scss'
import Stats from '../../components/molecules/Stats/Stats'

const About = () => (
  <div>
    <div className="hero-banner-cont d-flex align-items-center">
      <div className="container mb-5">
        <h1 className="text-white mb-5">About</h1>
      </div>
    </div>
    <div className="bg-white br-1 bs container about-cont mb-3">
      Sample content
    </div>
    <div className="container px-0 bs br-1 about-stats b mb-5">
      <Stats />
    </div>
  </div>
)

export default About
