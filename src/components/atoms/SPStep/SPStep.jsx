import React from 'react'
import PropTypes from 'prop-types'

import './SPStep.scss'

const SPStep = ({ data }) => (
  <div className="mb-2 container" id={data.id}>
    <h3 className="mb-2 main-heading">{data.header}</h3>
    <div>
      {data.value && (
        <div>
          <div>
            <p className="mb-4 main-desc">{data.value.subHeading}</p>
          </div>
          <div className="step-cont">
            {data.value.steps.map((step, index) => (
              <div key={step.heading} className="bg-gray br-1 mb-3 p-3 d-flex">
                <div className="step-count text-green d-flex align-items-center justify-content-center bebas">
                  {index + 1}
                </div>
                <div className="step-details w-100">
                  <h4>{step.heading}</h4>
                  {Array.isArray(step.desc) ? (
                    step.desc.map((d, i) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <p key={`para_${i}`} className={i > 0 ? 'mb-0' : 'mb-3'}>
                        {d}
                      </p>
                    ))
                  ) : (
                    <p>{step.desc}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
)

SPStep.propTypes = {
  data: PropTypes.PropTypes.shape()
}

SPStep.defaultProps = {
  data: {}
}

export default SPStep
