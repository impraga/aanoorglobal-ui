import React from 'react'

import Stats from '../../molecules/Stats/Stats'
import Testimonial from '../../molecules/Testimonial/Testimonial'

import './HomeWhyUsSection.scss'

const HomeWhyUsSection = () => (
  <div className="px-2">
    <div className="header-cont my-5">
      <h2 className="section-title" data-aos="fade-up" data-aos-delay="0">
        Why Us
      </h2>
      <p className="section-text" data-aos="fade-up" data-aos-delay="100">
        Its simple! we are <b>the best</b>
      </p>
    </div>
    <div className="container mb-5">
      <div className="row">
        <div className="col-md-4 mb-3" data-aos="fade-up" data-aos-delay="150">
          <Stats />
        </div>
        <div className="col-md-8 mb-3" data-aos="fade-up" data-aos-delay="200">
          <Testimonial />
        </div>
      </div>
    </div>
  </div>
)

export default HomeWhyUsSection
