import React from 'react'

import privacyDetails from '../../../public/assets/json/privacyPolicy.json'
import './PrivacyPolicy.scss'



const PrivacyPolicy = () => (
  <div>
    <div className='hero-banner-cont d-flex align-items-center'>
      <div className='container pb-5 text-white'>
        <h1>Who we are</h1>
        <p>Our website address is: https://aanoorglobal.com</p>
      </div>
    </div>
    <div className='privacy-cont mb-5 container bg-white br-1 bs p-4'>
      <div>
        <div className='row'>
          <div className='col-md-4'>
            <h2 className='mb-4'>What <span className='text-green'>personal data</span> we collect and why we collect it?</h2>
          </div>
          <div className='col-md-8'>
            <div>
              {privacyDetails.map(privacy =>
                <div key={privacy.title} className='bg-gray br-1 mb-4'>
                  <div className='d-flex align-items-center'>
                    <div className='privacy-img-cont bg-gray-dark'>
                      <img src={`assets/icons/${privacy.imgUrl}`} alt={privacy.title} />
                    </div>
                    <div className='mx-4 w-100'>
                      <h3>{privacy.title}</h3>
                      <hr className='w-100 my-0' />
                    </div>
                  </div>
                  <div className='p-4 pt-3'>
                    <p className='mb-0 desc'>{privacy.desc}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)


export default PrivacyPolicy
