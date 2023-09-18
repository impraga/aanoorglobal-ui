import React from 'react'

import './LandingPage.scss'

import aLogo from '../../../public/assets/icons/aanoor-a-logo.svg'
import landingBg from '../../../public/assets/images/landingPage_background.svg'
import SPBenefits from '../../components/atoms/SPBenefits/SPBenefits'
import ContactForm from '../../components/molecules/ContactForm/ContactForm'
import ContactSection from '../../components/organisms/ContactSection/ContactSection'
import LandingHeader from '../../components/atoms/LandingHeader/LandingHeader'
import SPAccordion from '../../components/atoms/SPAccordion/SPAccordion'
import PrimaryImport from '../../utils/primaryImport'

const LandingPage = () => {
  // Sample data - will replace later
  const benefitsData = {
    id: 'benefits',
    header: 'Benefits of QMS Certification',
    desc: '',
    type: 'SPBenefits',
    value: [
      {
        title: '',
        value: [
          'Increased customer satisfaction',
          'Improved product and service quality',
          'Increased efficiency and productivity',
          'Reduced costs',
          'Enhanced reputation',
          'Improved compliance with regulations'
        ]
      }
    ]
  }
  // Sample data - will replace later
  const landingData = {
    value: [
      {
        heading: 'Apply for Trademark Registration fill our Form',
        desc: ['sap1', 'ss', 'sdasd'],
        class: 'benefits'
      },
      {
        heading: 'Check your trademark search',
        desc: 'The trademark search is executed by experts to ensure that the brand name and logo name filed is available or not trademark registry. It gives complete observation about your brand application and takes just one working day.'
      },
      {
        heading:
          'Choose the appropriate class for best trademark Registration Company',
        desc: 'Based on the business whether products/service nature, we suggest a few specific classes from the 45 classes, and this also takes one day.'
      },
      {
        heading: 'Apply for Trademark Registration fill our Form',
        desc: ['sap1', 'ss', 'sdasd'],
        class: 'information'
      },
      {
        heading: 'Trademark Registration Online',
        desc: 'Once you receive your ™ number, your trademark is registered if there are no objections of the competitor to your applications of the brand.'
      }
    ]
  }

  return (
    <>
      <PrimaryImport />
      <LandingHeader />
      <div className="landing-page-cont bg-gray">
        <div className="lp-herobanner position-relative">
          <div className="container lp-hero-cont">
            <div className="row overflow-hidden">
              <div className="col-lg-6 lp-hero-text d-flex align-items-start justify-content-center flex-column">
                <h1 data-aos="fade-left" data-aos-delay="0">
                  Registration Employee Provident Fund (EPF)
                </h1>
                <p data-aos="fade-left" data-aos-delay="50">
                  Applicable for Everyone with an income, Salary or otherwise.
                </p>
                <div>
                  <SPBenefits data={benefitsData} />
                </div>
              </div>
              <div
                className="col-lg-6 lp-contact-form"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <ContactForm hideMessage />
              </div>
            </div>
          </div>
          <div className="lp-bg">
            <img src={landingBg} alt="decorative" />
          </div>
          <div className="aanoor-a-logo">
            <img src={aLogo} alt="Aanoor Logo" />
          </div>
        </div>
        <div className="lp-price d-flex align-items-center justify-content-center flex-sm-row flex-column py-sm-0 py-3 overflow-hidden">
          <div data-aos="fade-right" data-aos-delay="350">
            <hr className="lp-hr d-none d-lg-block mx-3" />
          </div>
          <div className="text" data-aos="zoom-in-up" data-aos-delay="250">
            Avail Services at
          </div>
          <div
            className="price bebas px-3"
            data-aos="zoom-in-up"
            data-aos-delay="150"
          >
            ₹ 7,200
          </div>
          <div className="text" data-aos="zoom-in-up" data-aos-delay="250">
            (All Inclusive)
          </div>
          <div data-aos="fade-left" data-aos-delay="350">
            <hr className="lp-hr d-none d-lg-block mx-3" />
          </div>
        </div>
        <div className="lp-stats bg-gray-dark">
          <div
            className="lg-accordion-cont container"
            data-aos="zoom-in-up"
            data-aos-delay="150"
          >
            <SPAccordion data={landingData} />
          </div>
        </div>
        <ContactSection />
        <div className="lp-footer bg-db ">
          <div className="container d-flex align-items-center text-white h-100">
            <p className="mb-0">
              © 2010 - 2023 Aanoor Global. All Right Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
