import React from 'react'
import PropTypes from 'prop-types'

import './SPParagraph.scss'

const SPParagraph = ({ data }) => (
  <div className="container mb-4 overflow-hidden" id={data.id}>
    <h3 data-aos="fade-left">{data.header}</h3>
    {Array.isArray(data.value) ? (
      data.value.map((d, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <p
          data-aos="fade-left"
          data-aos-delay={i * 50 + 100}
          key={`para_${i}`}
          className={i > 0 ? 'mb-0' : 'mb-3'}
        >
          {d}
        </p>
      ))
    ) : (
      <p className="mb-0" data-aos="fade-left" data-aos-delay="100">
        {data.value}
      </p>
    )}
  </div>
)

SPParagraph.propTypes = {
  data: PropTypes.PropTypes.shape()
}

SPParagraph.defaultProps = {
  data: {}
}

export default SPParagraph
