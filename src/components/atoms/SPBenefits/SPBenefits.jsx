
import React from 'react'
import PropTypes from 'prop-types'

import './SPBenefits.scss'

const SPBenefits = ({ data }) => (
  <div className="p-2" id={data.id}>
    <h3>{data.header}</h3>
    <ul>
      {data.value && data.value.map(points =>
        <li key={points}>{points}</li>
      )}
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
