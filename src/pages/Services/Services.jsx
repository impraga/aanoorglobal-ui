import React from 'react'
import './Services.scss'
// import { useParams } from "react-router"

import serviceList from '../../../public/assets/json/serviceDetails.json'
import ServiceHeroBanner from '../../components/molecules/ServicePageHeroBanner/ServiceHeroBanner'
import ServicePageContent from '../../components/molecules/ServicePageContent/ServicePageContent'
import ServicePageSidePanel from '../../components/molecules/ServicePageSidePanel/ServicePageSidePanel'

const Services = () => {
  const selectedService = 'trademark-registration'
  const serviceDetails = serviceList.filter(
    (service) => service.service === selectedService
  )[0]

  return (
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
            <ServicePageContent template={serviceDetails.template} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
