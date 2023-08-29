import React from 'react'
import PropTypes from 'prop-types'

import './SPStep.scss'

const SPStep = ({ data }) => (
  <div className="mb-2 container overflow-hidden" id={data.id}>
    {data.header && (
      <h3 className="mb-2 main-heading" data-aos="fade-left">
        {data.header}
      </h3>
    )}
    <div>
      {data.value && (
        <div>
          <div>
            <p
              className="mb-4 main-desc"
              data-aos="fade-left"
              data-aos-delay="50"
            >
              {data.value.subHeading}
            </p>
          </div>
          <div className="step-cont">
            {data.value.steps.map((step, index) => (
              <div
                key={step.heading}
                data-aos="fade-left"
                data-aos-delay={index * 50 + 100}
                className="bg-gray br-1 mb-3 p-3 d-flex"
              >
                <div className="step-count text-green d-flex align-items-center justify-content-center bebas">
                  {index + 1}
                </div>
                <div className="step-details w-100">
                  {step.heading && <h4>{step.heading}</h4>}
                  <p>{step.desc}</p>
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
