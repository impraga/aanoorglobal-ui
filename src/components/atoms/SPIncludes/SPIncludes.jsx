
import React from 'react'
import PropTypes from 'prop-types'

import './SPIncludes.scss'
import star from '../../../../public/assets/icons/star.png'

const SPIncludes = ({ data }) => (
  <div className="p-2" id={data.id}>
    <h3>{data.header}</h3>
    <div className='includes-cont d-flex flex-wrap'>
      {data.value.map(points =>
        <div key={points} className='d-flex align-items-center tip br-1'>
          <div>
            <img src={star} alt="star" /></div>
          <div>{points}</div>
        </div>
      )}
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
