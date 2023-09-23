import React from 'react'

import Stats from '../../components/molecules/Stats/Stats'

import './About.scss'
import HelmetWrapper from '../../components/atoms/HelmetWrapper/HelmetWrapper'

const metaDetails = {
  title: 'About | Annoor Global',
  canonicalUrl: 'www.aanoorglobal.com/about-us/',
  metaDesc:
    'Aanoor Global provide multiple services like GST, Income tax filing',
  metaKeywords: 'gst filing, income tax filing'
}

const About = () => (
  <>
    <HelmetWrapper data={metaDetails} />
    <div>
      <div className="hero-banner-cont d-flex align-items-center">
        <div className="container mb-5">
          <h1 className="text-white mb-5">About</h1>
        </div>
      </div>
      <div className="container">
        <div className="bg-white br-1 bs container about-cont mb-3 pb-4">
          <h2 className="">Aanoor Global Welcomes Entrepreneurs</h2>
          <p className="mb-2">
            Aanoor Global is solely operating with the dynamic, enterprising
            environment for all your business registrations. Smart & quick
            workability, professionals, and the pragmatic approach are
            considered to be some essential stream of our business services. We
            have developed an outstanding reputation among multiple companies
            through our excellent services.
          </p>
          <p>
            We incorporate different businesses like Private Banks, Non-Profit
            companies, Information Technologies, Financial Institutions,
            International companies, Societies, Trusts, E-commerce, and more.
            Our business approach is to follow the friendliness and formal
            business efficiency in all the works we perform.
          </p>
          <h2>AANOOR An Appointment Now Obtains Only Result.</h2>
          <p className="mb-2">
            We are into the business for the past 12 years and we have experts
            from different fields like marketing, accounting, banking,
            information technology, law, literature and more. It helps in
            providing effective results in all the aspects of your business from
            its inception. We are proud to be the market leaders (one stop
            business solution provider) in our sector and continue to formulate
            new services in the industry.
          </p>
          <p>
            Our consumer driven approach has been instrumental in delivering
            suitable and sustainable services. Our constant search in our field
            of expertise helps in enhancing and nourishing all business needs of
            them. Aanoor Global Corporate Solution guides you with relevant
            information and makes it easy in all means.
          </p>
          <h2>Mission</h2>
          <p className="mb-2">
            &quot;To provide fast, easy and operative solutions to all potential
            entrepreneurs right from the company formation to all their
            statutory-compliance requirements&quot;
          </p>
          <h4>What We Bring</h4>
          <ul>
            <li>A Complete professionalism in approach.</li>
            <li>Timely execution of services.</li>
            <li>Strict Adherence to Business Ethics.</li>
            <li>Wide Contact Base.</li>
            <li>
              Highly Qualified Team with respect to all statuary formalities.
            </li>
            <li>Competitive pricing across all services in the Industry.</li>
          </ul>
        </div>

        <div className="container px-0 bs br-1 about-stats b mb-5">
          <Stats />
        </div>
      </div>
    </div>
  </>
)

export default About
