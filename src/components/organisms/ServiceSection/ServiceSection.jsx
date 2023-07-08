import React from 'react'

import './ServiceSection.scss'
import ServiceCategory from '../../molecules/ServiceCategory/ServiceCategory'
import ServiceContainer from '../../molecules/ServiceContainer/ServiceContainer'

const cat = [
  {
    category: 'Startup Centre',
    serviceCount: '9 Services available',
    imgUrl: 'startup.png',
    colorCode: 'bg-lb'
  },
  {
    category: 'Intellectual Property',
    serviceCount: '8 Services available',
    imgUrl: 'property.png',
    colorCode: 'bg-green',
    child: []
  },
  {
    category: 'Registration',
    serviceCount: '6 Services available',
    imgUrl: 'registration.png',
    colorCode: 'bg-orange',
    child: []
  },
  {
    category: 'Certification',
    serviceCount: '10 Services available',
    imgUrl: 'certificate.png',
    colorCode: 'bg-purple',
    child: []
  },
  {
    category: 'Statutory Compliance',
    serviceCount: '4 Services available',
    imgUrl: 'statutory.png',
    colorCode: 'bg-red',
    child: []
  }
]

const services = [
  {
    title: 'Sole Proprietorship Registration',
    design: 'step-tocreate',
    price: {
      isAvailable: true,
      value: '2,800',
      note: 'with in *5 working days'
    },
    url: '',
    benefits: [
      'One person required as a Single Entrepreneur.',
      'Easy to start as well close with fewer formalities.',
      'Lower cost of compliance and formation.',
      'Single owner of the business',
      'Complete control.',
      'The Proprietorship who has less than Rs 2 Lakhs of income is not required to pay income tax.'
    ]
  },
  {
    title: 'One Person Company Registration',
    price: {
      isAvailable: true,
      value: '9,000',
      note: 'with in *5 working days'
    },
    url: '',
    benefits: [
      'Limited Liability Protection to the personal assets of the director.',
      'Easy to raise loans and funds.',
      'Complete company control with a single owner.',
      'Better credibility and image in the market.',
      'Enables funding and helps for business model testing.'
    ]
  }
]

function ServiceSection() {
  return (
    <div className='px-2'>
      <div className="header-cont my-5">
        <h2 className="section-title">Our Services</h2>
        <p className="section-text">
          <b>Save Time</b> Managing your business with our <b>best services</b>
        </p>
      </div>
      <div className="container services-cont px-0">
        <div className="d-flex overflow-cont br-1 bs">
          {cat.map((category) => (
            <div key={category.category} className="service-cat-cont d-flex align-items-stretch">
              <ServiceCategory data={category} />
            </div>
          ))}
        </div>
      </div>
      <div className="container bg-white p-4 pb-0 br-1 bs">
        <div className="row">
          {services.map((service) => (
            <div
              key={service.title}
              className="col-md-6 col-lg-4 d-flex align-items-stretch mb-4 "
            >
              <ServiceContainer key={service.title} data={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceSection
