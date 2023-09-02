import React from 'react'
import PropTypes from 'prop-types'

import './SPBullet.scss'

const SPBullet = ({ data }) => (
  <div
    className=" pb-0 mb-4 container bullet-cont overflow-hidden"
    id={data.id}
  >
    <h3 data-aos="fade-left">{data.header}</h3>
    {data.desc && (
      <p className="desc" data-aos="fade-left" data-aos-delay="50">
        {data.desc}
      </p>
    )}
    <ul>
      {data.value.map((points, index) => (
        <li key={points} data-aos="fade-left" data-aos-delay={index * 50 + 100}>
          {points}
        </li>
      ))}
    </ul>
  </div>
)

SPBullet.propTypes = {
  data: PropTypes.PropTypes.shape()
}

SPBullet.defaultProps = {
  data: {}
}

export default SPBullet
