import React from 'react'
import PropTypes from 'prop-types'

import './HeroBannerCertification.scss'

import certified from '../../../../public/assets/icons/certified.svg'
import badge from '../../../../public/assets/icons/badge.svg'
import dottedIcon from '../../../../public/assets/icons/dotted-icon.svg'
import certificateAbstract from '../../../../public/assets/images/certificate-abstract.png'

const HeroBannerCertification = ({ title, desc, price }) => (
  <div className="certification-hero-banner-cont d-flex overflow-hidden flex-column align-items-center justify-content-between bg-db position-relative">
    <div className="container">
      <div className="banner-holder position-relative d-flex flex-column justify-content-center justify-content-md-end">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div
                className="col-sm-8 mt-5 mb-3"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <div className="title-cont bebas text-white">
                  <div>Certification</div>
                  <span className="o-05">&</span>
                  <div>
                    <span className="text-green">SEC</span> Audits
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mt-4 mt-md-0 d-flex align-items-center justify-content-center position-relative badge-cont">
                {/* <div
                  className="glass d-none d-sm-block"
                  data-aos="fade-right"
                  data-aos-delay="100"
                /> */}
                <img
                  src={badge}
                  alt="decorative"
                  data-aos="fade-right"
                  data-aos-delay="150"
                />
              </div>
              <div className="col-12">
                <h1
                  className="text-white my-4 my-md-5"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  {title}
                </h1>
              </div>
            </div>
          </div>
          <div className="col-md-4 position-relative abstract-cont d-none d-md-flex">
            <div
              className="tag d-flex mb-3 text-white"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img className="mr-2" src={certified} alt="certified" />
              <p className="ms-2 mb-0">Let’s get certified</p>
            </div>
            {/* <div className="glass" data-aos="fade-up" data-aos-delay="150" /> */}
            <div
              className="dot-img-cont"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <img src={dottedIcon} alt="decorative" />
            </div>
            <div className="img-cont" data-aos="fade-up" data-aos-delay="50">
              <img src={certificateAbstract} alt="decorative" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="container hero-text-cont text-white mb-md-5 mb-3 overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div className="row">
          <div className="col-md-8 px-0 title-cont my-2 my-md-0">
            {/* <h1
              className="text-white mt-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {title}
            </h1> */}
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

HeroBannerCertification.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  price: PropTypes.shape().isRequired
}

export default HeroBannerCertification
