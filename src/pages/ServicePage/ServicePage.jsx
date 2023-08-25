import React from 'react'

import { useParams, useLocation } from 'react-router'
// import serviceList from '../../../public/assets/json/serviceDetails.json'
import ServiceHeroBanner from '../../components/molecules/ServicePageHeroBanner/ServiceHeroBanner'
import ServicePageContent from '../../components/molecules/ServicePageContent/ServicePageContent'
import ServicePageSidePanel from '../../components/molecules/ServicePageSidePanel/ServicePageSidePanel'
import NotFound from '../NotFound/NotFound'
import HelmetWrapper from '../../components/atoms/HelmetWrapper/HelmetWrapper'

import './ServicePage.scss'
import RelatedBlogSection from '../../components/organisms/RelatedBlogSection/RelatedBlogSection'
import URLs from '../../constants/urlMapper'

const ServicePage = () => {
  // const path = window.location.pathname.split('/')
  // const [time, setTime] = useState(0)
  // useEffect(() => {
  //   setTime(time + 1)
  // }, [category, serviceName])
  // const category = path[2]
  // const serviceName = path[3]

  const { category, serviceName } = useParams()
  const location = useLocation()

  // eslint-disable-next-line import/no-dynamic-require, global-require
  const serviceList = require(`../../../public/assets/json/service-${category}.json`)

  const serviceDetails = serviceList.filter(
    (service) => URLs[service.url] === location.pathname
  )[0]

  const metaDetails = {
    title: `Services | ${serviceDetails?.title} | Aanoor Global`,
    canonicalUrl: `www.aanoorglobal.com/services/${category}/${serviceName}`,
    metaDesc:
      'Aanoor Global provide multiple services like GST, Income tax filing',
    metaKeywords: 'gst filing, income tax filing'
  }

  // eslint-disable-next-line import/no-dynamic-require, global-require
  const sidePanelTemplate = ['intellectual-property', 'startup-center']

  const inputRefs = React.useRef([])

  return serviceDetails ? (
    <>
      <HelmetWrapper data={metaDetails} />
      <div className={`service-page-cont ${category}`}>
        {serviceDetails?.h1 && <h1 className="d-none">{serviceDetails.h1}</h1>}
        <ServiceHeroBanner
          title={serviceDetails.title}
          desc={serviceDetails.description}
          price={serviceDetails.price}
          category={category}
        />
        <div
          className={`serivce-details-cont ${
            sidePanelTemplate.includes(category)
              ? 'container side-panel-template'
              : 'container-fluid full-panel-template'
          }`}
        >
          <div className="row">
            {sidePanelTemplate.includes(category) && (
              <div className="col-md-4 d-md-block d-none">
                <ServicePageSidePanel
                  template={serviceDetails.template}
                  reference={inputRefs.current}
                />
              </div>
            )}
            <div
              className={`${
                sidePanelTemplate.includes(category)
                  ? 'col-md-8'
                  : 'col-12 px-0'
              }`}
            >
              <div
                className={`service-content-cont ${
                  sidePanelTemplate.includes(category)
                    ? 'container  px-3 py-4'
                    : 'container-fluid px-0'
                }`}
                data-aos="fade-up"
                data-aos-delay="150"
              >
                {serviceDetails.template?.map((data) => (
                  <div
                    className={`${data.id} ${data.type} component-cont`}
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
