import React from 'react'
import PropTypes from 'prop-types'

import IntellectualProperty from '../../../../public/assets/images/intellectual-property-bg.svg'
import IntellectualPropertyAbstract from '../../../../public/assets/images/intellectual-property-abstract.svg'
import IntellectualPropertyALogo from '../../../../public/assets/icons/intellectual-property-a-logo.svg'

import './HeroBannerIntellectualProperty.scss'

const HeroBannerIntellectualProperty = ({ title, desc, price }) => (
  <div className="IntellectualProperty-hero-banner-cont d-flex overflow-hidden flex-column align-items-center justify-content-between bg-db position-relative">
    <div className="container">
      <div className="banner-holder position-relative">
        <div
          className="blue-bg-cont p-3 pb-4 position-relative"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <h1
            className="bebas text-white heading"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <span>Intellectual</span>
            <br />
            <span className="text-green">Property</span>
          </h1>
          <div className="glass" data-aos="fade-up" data-aos-delay="350" />
          <img
            src={IntellectualPropertyALogo}
            className="a-logo"
            alt="decorative"
            data-aos="fade-up"
            data-aos-delay="100"
          />
          <img
            src={IntellectualPropertyAbstract}
            className="abstract"
            alt="decorative"
            data-aos="fade-up"
            data-aos-delay="200"
          />
        </div>
      </div>
      <div
        className="container hero-text-cont text-blue mb-3 p-4 br-1 bs overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div className="row">
          <div className="col-md-8 title-cont my-2 my-md-0">
            <h1 data-aos="fade-up" data-aos-delay="200">
              {title}
            </h1>
            <p className="mb-0" data-aos="fade-up" data-aos-delay="250">
              {desc}
            </p>
          </div>
          {price.isAvailable && (
            <div className="col-md-4 price-cont text-start text-md-end mb-0 mb-md-0">
              <p className="just mb-0" data-aos="fade-up" data-aos-delay="150">
                Just
              </p>
              <p
                className="price bebas mb-0"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="text-white">₹ </span>
                {price.value}
              </p>
              <p className="note mb-0" data-aos="fade-up" data-aos-delay="250">
                {price.note}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
    <div className="IntellectualProperty-bg">
      <img src={IntellectualProperty} alt="decorative" />
    </div>
  </div>
)

HeroBannerIntellectualProperty.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.shape().isRequired
}

export default HeroBannerIntellectualProperty
