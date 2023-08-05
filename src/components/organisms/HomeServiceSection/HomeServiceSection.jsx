import React, { useState } from 'react'

import HomeServiceCategory from '../../molecules/HomeServiceCategory/HomeServiceCategory'
import HomeServiceContainer from '../../molecules/HomeServiceContainer/HomeServiceContainer'
import serviceData from '../../../../public/assets/json/service.json'

import './HomeServiceSection.scss'

const HomeServiceSection = () => {
  const [selectedService, SetSelectedService] = useState(serviceData[0].child)
  const [selectedCategory, SetSelectedCategory] = useState(
    serviceData[0].category
  )

  function changeCategory(e, index) {
    SetSelectedService(serviceData[index].child)
    SetSelectedCategory(serviceData[index].category)
  }

  return (
    <div>
      <div className="header-cont my-5">
        <h2 className="section-title" data-aos="fade-up" data-aos-delay="0">
          Our Services
        </h2>
        <p className="section-text" data-aos="fade-up" data-aos-delay="100">
          <b>Save Time</b> Managing your business with our <b>best services</b>
        </p>
      </div>
      <div className="container services-cont">
        <div
          className="d-flex overflow-cont br-1 bs"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {serviceData.map((category, index) => (
            <button
              type="button"
              key={category.category}
              className="service-cat-cont br-1 text-db d-flex align-items-stretch"
              onClick={(event) => changeCategory(event, index)}
            >
              <HomeServiceCategory
                service={category}
                selectedCategory={selectedCategory}
              />
            </button>
          ))}
        </div>
      </div>
      <div className="container">
        <div
          className="container bg-white p-4 pb-0 br-1 bs"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="row">
            {selectedService.map((service, index) => (
              <div
                // key={service.title} removed this till content comes from client
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className="col-md-6 col-lg-4 d-flex align-items-stretch mb-4 "
                data-aos="fade-up"
                data-aos-delay={index * 50 + 200}
              >
                <HomeServiceContainer title={service.title} service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeServiceSection
