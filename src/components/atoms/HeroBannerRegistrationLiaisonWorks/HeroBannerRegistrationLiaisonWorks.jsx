import React from 'react'
import PropTypes from 'prop-types'

import './HeroBannerRegistrationLiaisonWorks.scss'

import registrationAbstract from '../../../../public/assets/icons/registration-abstract.png'

const HeroBannerRegistrationLiaisonWorks = ({ title, desc, price }) => (
  <div className="registration-hero-banner-cont d-flex overflow-hidden flex-column align-items-center justify-content-between bg-db position-relative">
    <div className="container">
      <div className="banner-holder position-relative">
        <div className="mt-5">
          <h1 className="bebas clip-cont">
            Registration & <br />
            Liaison Works
            <img src={registrationAbstract} alt="decorative" />
          </h1>
        </div>
      </div>
      <div
        className="container hero-text-cont text-white mb-md-5 mb-3 overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div className="row">
          <div className="col-md-8 px-0 title-cont my-2 my-md-0">
            <h1 className="text-green" data-aos="fade-up" data-aos-delay="200">
              {title}
            </h1>
            <p className="mb-0" data-aos="fade-up" data-aos-delay="250">
              {desc}
            </p>
          </div>
          {price.isAvailable && (
            <div className="col-md-4 px-0 price-cont text-start text-md-end mb-0 mb-md-0">
              <p className="just mb-0" data-aos="fade-up" data-aos-delay="150">
                Just
              </p>
              <p
                className="price bebas mb-0"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="text-green">₹ </span>
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
    {/* <div className="IntellectualProperty-bg">
      <img src={IntellectualProperty} alt="decorative" />
    </div> */}
  </div>
)

HeroBannerRegistrationLiaisonWorks.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.shape().isRequired
}

export default HeroBannerRegistrationLiaisonWorks
