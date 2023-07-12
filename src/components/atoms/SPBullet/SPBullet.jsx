
import React from 'react'
import PropTypes from 'prop-types'

import './SPBullet.scss'

const SPBullet = ({ data }) => (
  <div className="p-2" id={data.id}>
    <h3>{data.header}</h3>
    <ul>
      {data.value.map(points =>
        <li key={points}>{points}</li>
      )}
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
