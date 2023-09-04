import React from 'react'
import PropTypes from 'prop-types'

import startup from '../../../../public/assets/icons/startupcentre absctract.svg'
import startupBg from '../../../../public/assets/images/startup-centre-bg.svg'
import whiteLines from '../../../../public/assets/icons/lines-white.svg'

import './HeroBannerStartupCentre.scss'

const HeroBannerStartupCentre = ({ title, desc, price }) => (
  <div className="startup-hero-banner-cont d-flex overflow-hidden flex-column align-items-center justify-content-between bg-db position-relative">
    <div className="banner-holder position-relative">
      {/* <div className="startup">
        <span className="bebas text-green">Startup</span>
      </div>
      <div className="centre">
        <span className="bebas text-white">centre</span>
      </div> */}
      <div className="bg-img-cont" data-aos="zoom-in-up" data-aos-delay="100">
        <img src={startup} alt="Design" />
      </div>
    </div>
    <div className="container hero-text-cont text-white pb-5 mb-5">
      <div className="row">
        <div className="col-md-8 title-cont my-4 my-md-0 overflow-hidden">
          <h1 data-aos="fade-left" data-aos-delay="150">
            {title}
          </h1>
          <p data-aos="fade-left" data-aos-delay="250">
            {desc}
          </p>
        </div>
        {price.isAvailable && (
          <div className="col-md-4 price-cont text-start text-md-end mb-0 mb-md-0 overflow-hidden">
            <p className="just mb-0" data-aos="fade-left" data-aos-delay="300">
              Just
            </p>
            <p
              className="price bebas mb-0"
              data-aos="fade-left"
              data-aos-delay="350"
            >
              <span className="text-green">₹ </span>
              {price.value}
            </p>
            <p className="note" data-aos="fade-left" data-aos-delay="400">
              {price.note}
            </p>
          </div>
        )}
      </div>
    </div>
    <div className="startup-bg">
      <img src={startupBg} alt="decorative" />
    </div>
    <div className="whiteLines-bg d-md-block d-none">
      <img src={whiteLines} alt="decorative" />
    </div>
  </div>
)

HeroBannerStartupCentre.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.shape().isRequired
}

export default HeroBannerStartupCentre
