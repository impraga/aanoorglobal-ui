/* eslint-disable global-require */
import React, { Suspense, lazy } from 'react'
import { useParams } from 'react-router'

import { serviceTemplates } from '../../../constants'

const ServiceWrapper = () => {
  const { category, serviceName } = useParams()
  const ComponentLoader = loadTemplate(serviceTemplates[category])

  // eslint-disable-next-line import/no-dynamic-require
  const serviceList = require(`../../../../public/assets/json/service-${category}.json`)

  const serviceDetails = serviceList.filter(
    (service) => service.service === serviceName
  )[0]

  const metaDetails = {
    title: `Services | ${serviceDetails?.title} | Aanoor Global`,
    canonicalUrl: `www.aanoorglobal.com/services/${category}/${serviceName}`,
    metaDesc:
      'Aanoor Global provide multiple services like GST, Income tax filing',
    metaKeywords: 'gst filing, income tax filing'
  }

  return (
    <Suspense fallback="loading">
      <ComponentLoader props={{ serviceDetails, metaDetails, category }} />
    </Suspense>
  )
}

export default React.memo(ServiceWrapper)
