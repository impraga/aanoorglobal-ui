
import React from 'react'
import PropTypes from 'prop-types'
import Accordion from 'react-bootstrap/Accordion'
import './SPAccordion.scss'

const SPAccordion = ({ data }) => (
  <div className="p-2 pb-0 mb-4 accordion-cont" id={data.id}>
    <h3 className='mb-3'>{data.header}</h3>
    <Accordion defaultActiveKey="0">
      {data.value && data.value.map((accordion, index) =>
        <Accordion.Item key={accordion.heading} eventKey={index}>
          <Accordion.Header>{accordion.heading}</Accordion.Header>
          <Accordion.Body>{accordion.desc}</Accordion.Body>
        </Accordion.Item>
      )}
    </Accordion>
  </div>
)


SPAccordion.propTypes = {
  data: PropTypes.PropTypes.shape()
}

SPAccordion.defaultProps = {
  data: {}
}

export default SPAccordion
