import React from 'react'
import PropTypes from 'prop-types'

import './ButtonPrimary.scss'

const ButtonPrimary = ({ icon, text }) => (
  <button className="primary-button" type="button">
    <div className="text">{text}</div>
    <div className="circle" />
    <div className="icon-cont">
      <img src={icon} alt={icon} />
    </div>
  </button>
)

ButtonPrimary.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string
}

ButtonPrimary.defaultProps = {
  icon: '',
  text: ''
}

export default ButtonPrimary
