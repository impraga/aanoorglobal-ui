import React from 'react'
import PropTypes from 'prop-types'
import dotted from '../../../../public/assets/images/circle-dotted.png'

import './ServiceContainer.scss'

const ServiceContainer = ({ service, title }) => (
  <div className="service-cont w-100 p-4 bg-gray br-1">
    <div className="circle" />
    <div className="dotted">
      <img src={dotted} alt="" />
    </div>
    <div className="d-flex flex-column h-100 justify-content-between">
      <div>
        <h4 className="title">{title}</h4>
        {service.price.isAvailable && (
          <div className="price-cont">
            <p className="price bebas">
              <span className="text-green">₹</span> {service.price.value}
            </p>
            <p className="o-05 mb-3">{service.price.note}</p>
          </div>
        )}
        <hr className="text-green" />
        <p className="benfit-text">Benefits</p>
        <div className="benifts-ul">
          <ul>
            {service.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="view-btn">
        <button type="button" className="ag-primary-btn" href={service.url}>
          View Details
        </button>
      </div>
    </div>
  </div>
)

ServiceContainer.propTypes = {
  title: PropTypes.string.isRequired,
  service: PropTypes.shape().isRequired
}

export default ServiceContainer
