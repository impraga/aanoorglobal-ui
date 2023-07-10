import React from 'react'

import curve from '../../../../public/assets/icons/curve-bg-white.svg'
import ContactContainer from '../../molecules/ContactContainer/ContactContainer'

import './ContactSection.scss'
import ExpertButton from '../../atoms/ExpertButton/ExpertButton'

const contactDetails = [
  {
    city: 'Chennai',
    img: 'chennai.png',
    address:
      '117/2, Sai Bhanvan, Habibullah Rd, T. Nagar, Chennai - 600017, TamilNadu, India',
    phone: '+91 44 4355 4445',
    gmap: 'https://goo.gl/maps/vUdzreNGPTqRNhRV7',
    callto: '+914443554445'
  },
  {
    city: 'Erode',
    img: 'erode.png',
    address:
      '117/2, Sai Bhanvan, Habibullah Rd, T. Nagar, Chennai - 600017, TamilNadu, India',
    phone: '+91 44 4355 4445',
    gmap: 'https://goo.gl/maps/vUdzreNGPTqRNhRV7',
    callto: '+914443554445'
  },
  {
    city: 'Pune',
    img: 'pune.svg',
    address:
      '117/2, Sai Bhanvan, Habibullah Rd, T. Nagar, Chennai - 600017, TamilNadu, India',
    phone: '+91 44 4355 4445',
    gmap: 'https://goo.gl/maps/vUdzreNGPTqRNhRV7',
    callto: '+914443554445'
  }
]

const ContactSection = () => (
  <div>
    <div className="contact-cont px-2 pb-4 overflow-hidden">
      <div className="container header-cont position-relative text-white d-flex flex-column justify-content-center">
        <div className="row">
          <div className="col-sm-6 position-relative">
            <h3 data-aos="fade-up">Contact Us</h3>
            <div className="circle-bg" />
          </div>
          <div className="col-sm-6">
            <div className="d-flex align-items-center justify-content-sm-end justify-content-center">
              <div className="button-cont" data-aos="fade-up" data-aos-delay="50">
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
              <ContactContainer contactInfo={contact} />
              {/* </ScrollAnimation> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default ContactSection
