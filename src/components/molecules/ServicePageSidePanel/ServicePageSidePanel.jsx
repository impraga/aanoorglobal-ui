import React from 'react'
import PropTypes from 'prop-types'
import './ServicePageSidePanel.scss'

const ServicePageSidePanel = ({ template }) => (
  <div className="p-2 bg-white br-1 bs side-panel-cont">
    <div>
      {template.map((list) => (
        <div className="selector" key={list.id}>
          <h2>{list.id}</h2>
        </div>
      ))}
    </div>
  </div>
)

ServicePageSidePanel.propTypes = {
  template: PropTypes.arrayOf(PropTypes.shape())
}

ServicePageSidePanel.defaultProps = {
  template: [{}]
}

export default ServicePageSidePanel
