import React from 'react'
import PropTypes from 'prop-types'

// import serviceList from '../../../public/assets/json/serviceDetails.json'
import ServiceHeroBanner from '../../components/molecules/ServicePageHeroBanner/ServiceHeroBanner'
import ServicePageContent from '../../components/molecules/ServicePageContent/ServicePageContent'
import ServicePageSidePanel from '../../components/molecules/ServicePageSidePanel/ServicePageSidePanel'
import NotFound from '../NotFound/NotFound'
import HelmetWrapper from '../../components/atoms/HelmetWrapper/HelmetWrapper'

import './ServicePage.scss'
import RelatedBlogSection from '../../components/organisms/RelatedBlogSection/RelatedBlogSection'

const ServicePage = ({ props }) => {
  const { serviceDetails, metaDetails, category } = props
  // eslint-disable-next-line import/no-dynamic-require, global-require
  const sidePanelTemplate = ['intellectual-property', 'startup-center']

  const inputRefs = React.useRef([])

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

ServicePage.propTypes = {
  props: PropTypes.shape().isRequired,
  serviceDetails: PropTypes.shape().isRequired,
  metaDetails: PropTypes.shape().isRequired,
  category: PropTypes.string.isRequired
}

export default React.memo(ServicePage)
