import React from 'react'
import { useParams } from 'react-router'
import './Services.scss'

import serviceList from '../../../public/assets/json/serviceDetails.json'
import ServiceHeroBanner from '../../components/molecules/ServicePageHeroBanner/ServiceHeroBanner'
import ServicePageContent from '../../components/molecules/ServicePageContent/ServicePageContent'
import ServicePageSidePanel from '../../components/molecules/ServicePageSidePanel/ServicePageSidePanel'
import NotFound from '../NotFound/NotFound'

const Services = () => {
  const { serviceName } = useParams()
  const serviceDetails = serviceList.filter(
    (service) => service.service === serviceName
  )[0]

  return serviceDetails ? (
    <div>
      <ServiceHeroBanner
        title={serviceDetails.title}
        desc={serviceDetails.description}
        price={serviceDetails.price}
      />
      <div className="container serivce-details-cont">
        <div className="row">
          <div className="col-md-4  d-md-block d-none">
            <ServicePageSidePanel template={serviceDetails.template} />
          </div>
          <div className="col-md-8">
            <div className="container bg-white br-1 bs px-3 py-4">
              {serviceDetails.template?.map((data) => (
                <ServicePageContent
                  key={data.id}
                  template={data.type}
                  data={data}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <NotFound />
  )
}

export default React.memo(Services)
