import React from 'react'

import './LandingHeader.scss'

import logo from '../../../../public/assets/icons/aanoor-logo.svg'
import emailIcon from '../../../../public/assets/icons/email.png'
import callIcon from '../../../../public/assets/icons/call.png'

const LandingHeader = () => (
  <div className="lp-header bs">
    <div className="container d-flex align-items-center justify-content-between">
      <div className="aanoor-logo">
        <img src={logo} alt="Aanoor Logo" />
      </div>
      <div className="call-links d-flex align-items-center">
        <div className="email d-flex align-items-center pe-4">
          <div className="pe-3">
            <a href="mailto:info@aanoorglobal.com">
              <img src={emailIcon} alt="email" />
            </a>
          </div>
          <div className="flex-column justify-content-center d-none d-md-flex">
            <div>Email us</div>
            <div>
              <a href="mailto:info@aanoorglobal.com">info@aanoorglobal.com</a>
            </div>
          </div>
        </div>
        <div className="call d-flex align-items-center">
          <div className="pe-3">
            <a href="mailto:info@aanoorglobal.com">
              <img src={callIcon} alt="email" />
            </a>
          </div>
          <div className="flex-column justify-content-center   d-none d-md-flex">
            <div>Call our support</div>
            <div>
              <a href="tel:+914443554445">+91 44 4355 4445</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default LandingHeader
