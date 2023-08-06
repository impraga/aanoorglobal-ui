import React from 'react'

import curve from '../../../../public/assets/icons/curve-bg-white.svg'
import ContactUsContainer from '../../atoms/ContactUsContainer/ContactUsContainer'

import ExpertButton from '../../atoms/ExpertButton/ExpertButton'

import './ContactSection.scss'
import { contactDetails } from '../../../constants'

const ContactSection = () => (
  <div className="position-relative">
    <div className="contact-cont px-2 pb-4 overflow-hidden">
      <div className="container header-cont position-relative text-white d-flex flex-column justify-content-center">
        <div className="row">
          <div className="col-sm-6 position-relative">
            <h3 data-aos="fade-up">Contact Us</h3>
            <div className="circle-bg" />
          </div>
          <div className="col-sm-6">
            <div className="d-flex align-items-center justify-content-sm-end justify-content-center">
              <div
                className="button-cont"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <ExpertButton />
              </div>
              <div className="curve-bg">
                <img src={curve} alt="Curve" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-4">
          {contactDetails.map((contact, index) => (
            <div
              key={contact.city}
              className="col-sm-8 col-md-6 col-lg-4 mx-auto mt-4 cc-cont "
              data-aos="fade-up"
              data-aos-delay={50 * index}
            >
              {/* <ScrollAnimation animateIn="fadeInUp" delay={index * 100}> */}
              <ContactUsContainer contactInfo={contact} />
              {/* </ScrollAnimation> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default ContactSection
