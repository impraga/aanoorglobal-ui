import React from 'react'
import PropTypes from 'prop-types'

import './ContactContainer.scss'

const ContactContainer = ({ contactInfo }) => {
  return (
    <div className="bg-white br-1 h-100 contact-container position-relative overflow-hidden">
      <div className="info-cont d-flex flex-row align-items-center p-3 position-relative">
        <div className="img-cont">
          <img src={`/assets/icons/${contactInfo.img}`} alt="" />
        </div>
        <div className="links-cont">
          <h5 className="city mb-0">
            <a target="blank" href={contactInfo.gmap}>
              {contactInfo.city}
            </a>
          </h5>
          <p>
            <a target="blank" href={contactInfo.gmap}>
              {contactInfo.address}
            </a>
          </p>
          <p className="phone-no">
            <a target="blank" href={`tel:${contactInfo.callto}`}>
              {contactInfo.phone}
            </a>
          </p>
        </div>
      </div>
      <div className="contact-bg bg-gray" />
    </div>
  )
}

ContactContainer.propTypes = {
  contactInfo: PropTypes.shape().isRequired
}

export default ContactContainer
