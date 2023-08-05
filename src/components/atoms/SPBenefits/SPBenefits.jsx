import React from 'react'
import PropTypes from 'prop-types'

import './SPBenefits.scss'

const SPBenefits = ({ data }) => (
  <div className="p-2 pb-0 mb-4 benefits-cont" id={data.id}>
    <h3 className="mb-3">{data.header}</h3>
    <p className="mb-0">{data.desc && data.desc}</p>
    <ul className="benefits-ul">
      {data.value &&
        data.value.map((benefit) => (
          <div key={benefit.title}>
            <h4>{benefit.title && benefit.title}</h4>
            {benefit.value &&
              benefit.value.map((points) => (
                <li className="bg-gray br-1" key={points}>
                  {points}
                </li>
              ))}
          </div>
        ))}
    </ul>
  </div>
)

SPBenefits.propTypes = {
  data: PropTypes.PropTypes.shape()
}

SPBenefits.defaultProps = {
  data: {}
}

export default SPBenefits
