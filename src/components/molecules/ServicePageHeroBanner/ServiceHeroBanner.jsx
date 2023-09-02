/* eslint-disable react/no-unstable-nested-components */
import React, { Suspense, lazy } from 'react'
import PropTypes from 'prop-types'
import './ServiceHeroBanner.scss'
import { serviceTemplates } from '../../../constants'

const TemplateLoader = {
  STARTUP_CENTER: () =>
    import('../../atoms/HeroBannerStartupCentre/HeroBannerStartupCentre'),
  INTELLECTUAL_PROPERTY: () =>
    import(
      '../../atoms/HeroBannerIntellectualProperty/HeroBannerIntellectualProperty'
    ),
  REGISTRATION: () =>
    import(
      '../../atoms/HeroBannerRegistrationLiaisonWorks/HeroBannerRegistrationLiaisonWorks'
    ),
  CERTIFICATION: () =>
    import('../../atoms/HeroBannerCertification/HeroBannerCertification'),
  STATUARY_COMPLIANCE: () =>
    import(
      '../../atoms/HeroBannerStatuaryCompliance/HeroBannerStatuaryCompliance'
    )
}

const loadTemplate = (temp) => {
  if (temp) {
    return lazy(TemplateLoader[temp], {
      ssr: false
    })
  }
  return lazy(TemplateLoader[temp], {
    ssr: false
  })
}

const ServiceHeroBanner = ({ title, desc, price, category }) => {
  const ComponentLoader = loadTemplate(serviceTemplates[category])

  return (
    <Suspense fallback="loading">
      <ComponentLoader title={title} desc={desc} price={price} />
    </Suspense>
  )
}

ServiceHeroBanner.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  price: PropTypes.shape().isRequired,
  category: PropTypes.string.isRequired
}

export default ServiceHeroBanner
