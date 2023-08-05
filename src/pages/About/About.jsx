import React from 'react'

import Stats from '../../components/molecules/Stats/Stats'

import './About.scss'
import HelmetWrapper from '../../components/atoms/HelmetWrapper/HelmetWrapper'

const metaDetails = {
  title: 'About | Annoor Global',
  canonicalUrl: 'www.aanoorglobal.com/about-us/',
  metaDesc:
    'Aanoor Global provide multiple services like GST, Income tax filing',
  metaKeywords: 'gst filing, income tax filing'
}

const About = () => (
  <>
    <HelmetWrapper data={metaDetails} />
    <div>
      <div className="hero-banner-cont d-flex align-items-center">
        <div className="container mb-5">
          <h1 className="text-white mb-5">About</h1>
        </div>
      </div>
      <div className="container">
        <div className="bg-white br-1 bs container about-cont mb-3">
          Sample content
        </div>
        <div className="container px-0 bs br-1 about-stats b mb-5">
          <Stats />
        </div>
      </div>
    </div>
  </>
)

export default About
