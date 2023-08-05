import React, { Suspense, lazy } from 'react'
import PropTypes from 'prop-types'

import './ServicePageContent.scss'

const TemplateLoader = {
  SPBullet: () => import('../../atoms/SPBullet/SPBullet'),
  SPParagraph: () => import('../../atoms/SPParagraph/SPParagraph'),
  SPIncludes: () => import('../../atoms/SPIncludes/SPIncludes'),
  SPBenefits: () => import('../../atoms/SPBenefits/SPBenefits'),
  SPStep: () => import('../../atoms/SPStep/SPStep'),
  SPDocuments: () => import('../../atoms/SPDocuments/SPDocuments'),
  SPAccordion: () => import('../../atoms/SPAccordion/SPAccordion')
}

const loadTemplate = (temp) =>
  lazy(TemplateLoader[temp], {
    ssr: false
  })

const ServicePageContent = ({ template, data }) => {
  const ComponentLoader = loadTemplate(template)
  return (
    <Suspense fallback="loading">
      <ComponentLoader data={data} />
    </Suspense>
  )
}

ServicePageContent.propTypes = {
  template: PropTypes.string,
  data: PropTypes.shape().isRequired
}

ServicePageContent.defaultProps = {
  template: ''
}

export default ServicePageContent
