import React from 'react'
import PropTypes from 'prop-types'

import './ServicePageContent.scss'
import SPBullet from '../../atoms/SPBullet/SPBullet'
import SPParagraph from '../../atoms/SPParagraph/SPParagraph'
import SPIncludes from '../../atoms/SPIncludes/SPIncludes'
import SPBenefits from '../../atoms/SPBenefits/SPBenefits'
import SPStep from '../../atoms/SPStep/SPStep'
import SPDocuments from '../../atoms/SPDocuments/SPDocuments'
import SPAccordion from '../../atoms/SPAccordion/SPAccordion'

const components = {
  SPBullet,
  SPParagraph,
  SPIncludes,
  SPBenefits,
  SPStep,
  SPDocuments,
  SPAccordion
}

const ServicePageContent = ({ template }) => (
  <div className="container bg-white br-1 bs px-3 py-4">
    {template &&
      template.map(
        (value) =>
          components[value.type] &&
          React.createElement(components[value.type], {
            key: value.id,
            data: value
          })
      )}
  </div>
)

ServicePageContent.propTypes = {
  template: PropTypes.arrayOf(PropTypes.shape())
}

ServicePageContent.defaultProps = {
  template: [{}]
}

export default ServicePageContent
