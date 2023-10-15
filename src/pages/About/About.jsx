import React from 'react'

import Stats from '../../components/molecules/Stats/Stats'

import './About.scss'
import aboutAbstract from '../../../public/assets/icons/about-logo-abstract.svg'
import aboutAanoorLogo from '../../../public/assets/icons/about-aanoor-logo.svg'
import missionImage from '../../../public/assets/icons/mission.svg'
import HelmetWrapper from '../../components/atoms/HelmetWrapper/HelmetWrapper'
import SPBenefits from '../../components/atoms/SPBenefits/SPBenefits'

const metaDetails = {
  title: 'About | Annoor Global',
  canonicalUrl: 'www.aanoorglobal.com/about-us/',
  metaDesc:
    'Aanoor Global provide multiple services like GST, Income tax filing',
  metaKeywords: 'gst filing, income tax filing'
}

const missionData = {
  id: 'What We Bring',
  header: 'What We Bring',
  desc: '',
  type: 'SPBenefits',
  value: [
    {
      title: '',
      value: [
        'A Complete professionalism in approach.',
        'Timely execution of services.',
        'Strict Adherence to Business Ethics.',
        'Wide Contact Base.',
        'Highly Qualified Team with respect to all statuary formalities.',
        'Competitive pricing across all services in the Industry.'
      ]
    }
  ]
}

const About = () => (
  <>
    <HelmetWrapper data={metaDetails} />
    <div className="overflow-hidden">
      <div className="about-cont overflow-hidden position-relative">
        <div className="container">
          <h1
            className="text-green mb-md-5 mt-md-2 mb-3 mt-5"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Aanoor Global <b>Welcomes Entrepreneurs</b>
          </h1>
          <p data-aos="fade-up" data-aos-delay="150" className="mb-md-0 mb-5">
            <b>Aanoor Global</b> is solely operating with the dynamic,
            enterprising environment for all your business registrations. Smart
            & quick workability, professionals, and the pragmatic approach are
            considered to be some essential stream of our business services. We
            have developed an outstanding reputation among multiple companies
            through our excellent services.
            <br />
            <br />
            We incorporate different businesses like Private Banks, Non-Profit
            companies, Information Technologies, Financial Institutions,
            International companies, Societies, Trusts, E-commerce, and more.
            Our business approach is to follow the friendliness and formal
            business efficiency in all the works we perform.
          </p>
        </div>
        <img
          className="a-logo"
          data-aos="fade-up"
          data-aos-delay="100"
          src={aboutAanoorLogo}
          alt="Aanoor A logo"
        />
      </div>
      <div className="container aanoor-cont py-5">
        <div className="row mx-0">
          <div className="img-cont mb-3 col-md-4">
            <img
              data-aos="fade-up"
              data-aos-delay="50"
              src={aboutAbstract}
              alt="Aannor - An Appointment Now Obtains Only Result."
            />
          </div>
          <div className="col-md-8">
            <p data-aos="fade-left" data-aos-delay="150">
              We are into the business for the past 12 years and we have experts
              from different fields like marketing, accounting, banking,
              information technology, law, literature and more. It helps in
              providing effective results in all the aspects of your business
              from its inception. We are proud to be the market leaders (one
              stop business solution provider) in our sector and continue to
              formulate new services in the industry.
              <br />
              <br />
              Our consumer driven approach has been instrumental in delivering
              suitable and sustainable services. Our constant search in our
              field of expertise helps in enhancing and nourishing all business
              needs of them. Aanoor Global Corporate Solution guides you with
              relevant information and makes it easy in all means.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="px-0 bs br-1 about-stats mb-5 mx-2">
          <Stats />
        </div>
      </div>
      <div className="container mission-cont">
        <h2 className="ms-2" data-aos="fade-left" data-aos-delay="50">
          Mission
        </h2>
        <div className="row mx-0 justify-content-between">
          <div className="col-md-6">
            <div>
              <p data-aos="fade-left" data-aos-delay="150">
                To provide fast, easy and operative solutions to all potential
                entrepreneurs right from the company formation to all their
                statutory-compliance requirements
              </p>
            </div>
            <div className="row">
              <SPBenefits data={missionData} />
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center py-3">
            <div className="img-cont">
              <img src={missionImage} data-aos="zoom-in-up" alt="Mission" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default About
