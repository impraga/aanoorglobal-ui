import React from 'react'
import PropTypes from 'prop-types'

import './HomeServiceCategory.scss'

const HomeServiceCategory = ({ service, selectedCategory }) => (
  <div
    className={`category-cont bg-white br-1 bs p-3 w-100 overflow-hidden position-relative ${
      selectedCategory === service.category ? ' active ' : ''
    }`}
  >
    <div className="d-flex h-100 flex-column justify-content-between">
      <div className="position-relative">
        <div className="cat-img-cont d-flex align-items-center justify-content-center">
          <img src={`/assets/images/${service.imgUrl}`} alt="" />
        </div>
        <div className={`cat-img-bg position-absolute ${service.colorCode}`} />
        {/* <div className="cat-img-bg position-absolute bg-white"/> */}
        <h3 className="text-blue">{service.category}</h3>
      </div>
      <div>
        <p className="o-05 mb-0">{service.serviceCount}</p>
      </div>
    </div>
    <div className={`hov-circle ${service.colorCode}`} />
  </div>
)

HomeServiceCategory.propTypes = {
  service: PropTypes.shape().isRequired,
  selectedCategory: PropTypes.string.isRequired
}

export default HomeServiceCategory
