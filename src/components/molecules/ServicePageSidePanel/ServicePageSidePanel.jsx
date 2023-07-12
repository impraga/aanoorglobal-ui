
import React from 'react'
import PropTypes from 'prop-types'

import './ServicePageSidePanel.scss'

const ServicePageSidePanel = ({ data }) => (
  <div className="p-2">
  </div>
)


ServicePageSidePanel.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape())
}

ServicePageSidePanel.defaultProps = {
  data: [{}]
}

export default ServicePageSidePanel
