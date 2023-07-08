import React from 'react'

import './ContactSection.scss'
import curve from '../../../../public/assets/icons/curve-bg-white.svg'
import ContactContainer from '../../molecules/ContactContainer/ContactContainer'

const contactDetails = [
  {
    city: "Chennai",
    img: "chennai.png",
    address: "117/2, Sai Bhanvan, Habibullah Rd, T. Nagar, Chennai - 600017, TamilNadu, India",
    phone: "+91 44 4355 4445",
    gmap: "https://goo.gl/maps/vUdzreNGPTqRNhRV7",
    callto: "+914443554445"
  },
  {
    city: "Erode",
    img: "erode.png",
    address: "117/2, Sai Bhanvan, Habibullah Rd, T. Nagar, Chennai - 600017, TamilNadu, India",
    phone: "+91 44 4355 4445",
    gmap: "https://goo.gl/maps/vUdzreNGPTqRNhRV7",
    callto: "+914443554445"
  },
  {
    city: "Pune",
    img: "pune.svg",
    address: "117/2, Sai Bhanvan, Habibullah Rd, T. Nagar, Chennai - 600017, TamilNadu, India",
    phone: "+91 44 4355 4445",
    gmap: "https://goo.gl/maps/vUdzreNGPTqRNhRV7",
    callto: "+914443554445"
  }
]

function ContactSection() {
  return (
    <div>
      <div className='contact-cont px-2 pb-4'>
        <div className='container header-cont position-relative text-white d-flex flex-column justify-content-center'>
          <div className='row'>
            <div className='col-sm-6 position-relative'>
              <h3>Contact Us</h3>
              <div className='circle-bg' />
            </div>
            <div className='col-sm-6'>
              <div className=' d-flex align-items-center justify-content-end'>
                <div className="button-cont">
                  <button type='button'>Call the experts</button>
                </div>
                <div className='curve-bg'>
                  <img src={curve} alt="Curve" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className='row mt-4'>
            {contactDetails.map(contact =>
              <div key={contact.city} className='col-sm-8 col-md-6 col-lg-4 mx-auto mt-4 cc-cont '>
                <ContactContainer data={contact}/>
              </div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
