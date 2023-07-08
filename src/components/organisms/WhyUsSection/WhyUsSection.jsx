import React from 'react'

import Stats from '../../molecules/Stats/Stats'
import Testimonial from '../../molecules/Testimonial/Testimonial'

import './WhyUsSection.scss'

const WhyUsSection = () => (
  <div className="px-2">
    <div className="header-cont my-5">
      <h2 className="section-title">Why Us</h2>
      <p className="section-text">
        Its simple! we are <b>the best</b>
      </p>
    </div>
    <div className="container mb-5">
      <div className="row">
        <div className="col-md-4">
          <Stats />
        </div>
        <div className="col-md-8">
          <Testimonial />
        </div>
      </div>
    </div>
  </div>
)

export default WhyUsSection
