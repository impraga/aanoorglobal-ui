import React from 'react'
import { useParams } from 'react-router'

import serviceList from '../../../public/assets/json/serviceDetails.json'
import ServiceHeroBanner from '../../components/molecules/ServicePageHeroBanner/ServiceHeroBanner'
import ServicePageContent from '../../components/molecules/ServicePageContent/ServicePageContent'
import ServicePageSidePanel from '../../components/molecules/ServicePageSidePanel/ServicePageSidePanel'
import NotFound from '../NotFound/NotFound'
import HelmetWrapper from '../../components/atoms/HelmetWrapper/HelmetWrapper'

import './ServicePage.scss'
import RelatedBlogSection from '../../components/organisms/RelatedBlogSection/RelatedBlogSection'

const ServicePage = () => {
  const { category, serviceName } = useParams()
  const serviceDetails = serviceList.filter(
    (service) => service.service === serviceName
  )[0]

  const inputRefs = React.useRef([])

  const metaDetails = {
    title: `Services | ${serviceDetails?.title} | Aanoor Global`,
    canonicalUrl: `www.aanoorglobal.com/services/${category}/${serviceName}`,
    metaDesc:
      'Aanoor Global provide multiple services like GST, Income tax filing',
    metaKeywords: 'gst filing, income tax filing'
  }

  return serviceDetails ? (
    <>
      <HelmetWrapper data={metaDetails} />
      <div className={category}>
        <ServiceHeroBanner
          title={serviceDetails.title}
          desc={serviceDetails.description}
          price={serviceDetails.price}
          category={category}
        />
        <div className="container serivce-details-cont">
          <div className="row">
            <div className="col-md-4  d-md-block d-none">
              <ServicePageSidePanel
                template={serviceDetails.template}
                reference={inputRefs.current}
              />
            </div>
            <div className="col-md-8">
              <div className="container bg-white br-1 bs px-3 py-4">
                {serviceDetails.template?.map((data) => (
                  <div
                    className={data.id}
                    ref={(ref) => inputRefs.current.push(ref)}
                    key={data.id}
                  >
                    <ServicePageContent template={data.type} data={data} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <RelatedBlogSection />
    </>
  ) : (
    <NotFound />
  )
}

export default React.memo(ServicePage)
