import React from 'react'

import privacyDetails from '../../../public/assets/json/privacyPolicy.json'
import './PrivacyPolicy.scss'

const PrivacyPolicy = () => (
  <div>
    <div className="hero-banner-cont d-flex align-items-center">
      <div className="container pb-5 text-white">
        <h1 data-aos="fade-up" data-aos-delay="0">
          Who we are
        </h1>
        <p data-aos="fade-up" data-aos-delay="50">
          Our website address is: https://aanoorglobal.com
        </p>
      </div>
    </div>
    <div className="privacy-cont mb-5 container">
      <div>
        <div className="row mb-4">
          <div className="col-md-4 privacy-header-cont">
            <h2
              data-aos="fade-up"
              data-aos-delay="150"
              className="mb-4 bg-white br-1 bs p-4"
            >
              What <span className="text-green">personal data</span> we collect
              and why we collect it?
            </h2>
          </div>
          <div className="col-md-8 ">
            <div
              className="bg-white br-1 bs p-4"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div>
                {privacyDetails.dataInfo.map((privacy, index) => (
                  <div
                    key={privacy.title}
                    className="bg-gray br-1 mb-4"
                    data-aos="fade-up"
                    data-aos-delay={(index + 1) * 50}
                  >
                    <div className="d-flex align-items-center">
                      <div className="privacy-img-cont bg-gray-dark">
                        <img
                          src={`assets/icons/${privacy.imgUrl}`}
                          alt={privacy.title}
                        />
                      </div>
                      <div className="mx-4 w-100">
                        <h3>{privacy.title}</h3>
                        <hr className="w-100 my-0" />
                      </div>
                    </div>
                    <div className="p-4 pt-3">
                      <p className="mb-0 desc">{privacy.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 privacy-header-cont">
            <h2
              data-aos="fade-up"
              data-aos-delay="0"
              className="mb-4 bg-white br-1 bs p-4"
            >
              Analytics
            </h2>
          </div>
          <div className="col-md-8 ">
            <div
              className="bg-white br-1 bs p-4 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              {privacyDetails.analyticsInfo.map((privacy, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={(index + 1) * 50}
                  key={privacy.title}
                  className="br-1 mb-3"
                >
                  <div className="d-flex align-items-center">
                    <div className="w-100">
                      <h3>{privacy.title}</h3>
                      <hr className="w-100 mt-0 mb-2" />
                    </div>
                  </div>
                  <div>
                    <p className="mb-0 desc">{privacy.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default PrivacyPolicy
