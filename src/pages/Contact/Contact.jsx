import React from 'react'

import './Contact.scss'
import ContactForm from '../../components/molecules/ContactForm/ContactForm'

const Contact = () => (
  <div className='container contact-main-cont'>
    {/* <div>
      <h1>Contact</h1>
    </div> */}
    <div className='position-relative contact-form-cont d-flex align-items-center justify-content-center bg-white br-1 bs mt-4 mb-5'>
      <ContactForm />
    </div>
    <div className='contact-main-cont-bg bg-db hero-banner-cont' />
  </div>
)

export default Contact
