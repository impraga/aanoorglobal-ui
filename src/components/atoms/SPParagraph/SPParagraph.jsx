import React from 'react'
import PropTypes from 'prop-types'

import './SPParagraph.scss'

const SPParagraph = ({ data }) => (
  <div className="container mb-4" id={data.id}>
    <h3>{data.header}</h3>
    <p className="mb-0">{data.value}</p>
  </div>
)

SPParagraph.propTypes = {
  data: PropTypes.PropTypes.shape()
}

SPParagraph.defaultProps = {
  data: {}
}

export default SPParagraph
