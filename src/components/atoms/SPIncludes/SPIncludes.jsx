import React from 'react'
import PropTypes from 'prop-types'

import star from '../../../../public/assets/icons/star.png'

import './SPIncludes.scss'

const SPIncludes = ({ data }) => (
  <div className="container pb-0 mb-4" id={data.id}>
    <h3 className="mb-3" data-aos="fade-left">
      {data.header}
    </h3>
    <div className="includes-cont d-flex flex-wrap">
      {data.value.map((points, index) => (
        <div
          key={points}
          data-aos="fade-left"
          data-aos-delay={index * 50 + 100}
          className="d-flex align-items-center tip br-1"
        >
          <div>
            <img src={star} alt="star" />
          </div>
          <div>{points}</div>
        </div>
      ))}
    </div>
  </div>
)

SPIncludes.propTypes = {
  data: PropTypes.PropTypes.shape()
}

SPIncludes.defaultProps = {
  data: {}
}

export default SPIncludes
