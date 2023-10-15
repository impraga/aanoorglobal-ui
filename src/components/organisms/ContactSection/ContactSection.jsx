import React from 'react'

import curve from '../../../../public/assets/icons/curve-bg-white.svg'
import ContactUsContainer from '../../atoms/ContactUsContainer/ContactUsContainer'

import ExpertButton from '../../atoms/ExpertButton/ExpertButton'

import './ContactSection.scss'
import { contactDetails } from '../../../constants'

import erodeIcon from '../../../../public/assets/icons/erode.png'
import puneIcon from '../../../../public/assets/icons/pune.svg'

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
          <div
            className="col-sm-8 col-md-6 col-lg-6 mx-auto mt-4 cc-cont"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="bg-white br-1 h-100 branch-contact-container position-relative overflow-hidden">
              <div className="info-cont d-flex flex-column align-items-center p-3 position-relative">
                <div>
                  <h5 className="text-center mb-3">
                    <b>We also have branches on</b>
                  </h5>
                </div>
                <div className="d-flex w-100 justify-content-evenly">
                  <div>
                    <div className="img-cont">
                      <img src={erodeIcon} alt="Erode City" />
                    </div>
                    <div className="links-cont">
                      <h5 className="city mb-0">Erode</h5>
                    </div>
                  </div>
                  <div>
                    <div className="img-cont">
                      <img src={puneIcon} alt="Pune City" />
                    </div>
                    <div className="links-cont">
                      <h5 className="city mb-0">Pune</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-bg bg-gray" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ContactSection
