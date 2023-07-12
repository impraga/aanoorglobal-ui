

import React from 'react'
import PropTypes from 'prop-types'

import './SPParagraph.scss'

const SPParagraph = ({ data }) => (
  <div className="container pb-2" id={data.id}>
    <h3>{data.header}</h3>
    <p>{data.value}</p>
  </div>
)


SPParagraph.propTypes = {
  data: PropTypes.PropTypes.shape()
}

SPParagraph.defaultProps = {
  data: {}
}

export default SPParagraph
