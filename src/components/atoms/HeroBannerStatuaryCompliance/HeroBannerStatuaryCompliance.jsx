import React from 'react'
import PropTypes from 'prop-types'

import './HeroBannerStatuaryCompliance.scss'

const HeroBannerStatuaryCompliance = ({ title, desc, price }) => (
  <div className="statuary-hero-banner-cont d-flex flex-column overflow-hidden position-relative">
    <div>
      <div className="banner-holder">
        <div
          className="title-cont bebas"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Statuary Compliance
        </div>
      </div>
    </div>
    <div
      className="hero-text-cont bg-db mx-auto container"
      data-aos="zoom-in-up"
    >
      <div className="title-cont">
        <h2 className="title" data-aos="fade-up" data-aos-delay="100">
          {title}
        </h2>
        <p data-aos="fade-up" data-aos-delay="200">
          {desc}
        </p>
      </div>
    </div>
  </div>
)

HeroBannerStatuaryCompliance.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.shape().isRequired
}

export default HeroBannerStatuaryCompliance
