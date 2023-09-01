import React from 'react'
import PropTypes from 'prop-types'

import shield from '../../../../public/assets/icons/shield.svg'
import file from '../../../../public/assets/icons/file.svg'
import hammer from '../../../../public/assets/icons/hammer.svg'
import correct from '../../../../public/assets/icons/correct.svg'
import heroBg from '../../../../public/assets/images/statuary-compliance-hero-bg.svg'

import './HeroBannerStatuaryCompliance.scss'

const HeroBannerStatuaryCompliance = ({ title, desc, price }) => (
  <div className="statuary-hero-banner-cont d-flex flex-column overflow-hidden position-relative">
    <div>
      <div className="banner-holder position-relative container">
        <img className="herobanner-bg" src={heroBg} alt="decorative" />
        <div
          className="title-cont bebas text-db"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Statuary Compliance
        </div>
        <div className="decorative-img">
          <img
            src={shield}
            className="shield"
            alt="decorative"
            data-aos="zoom-out-up"
            data-delay="50"
          />
          <img
            src={file}
            className="file"
            alt="decorative"
            data-aos="zoom-out-up"
            data-delay="100"
          />
          <img
            src={hammer}
            className="hammer"
            alt="decorative"
            data-aos="zoom-out-up"
            data-delay="150"
          />
          <img
            src={correct}
            className="correct"
            alt="decorative"
            data-aos="zoom-out-up"
            data-delay="200"
          />
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
