import React, { useRef, useEffect } from 'react'

import gsap from 'gsap'

import person from '../../../../public/assets/images/person.png'
import ring from '../../../../public/assets/icons/ring.svg'
import dotted from '../../../../public/assets/icons/dotted-icon.svg'
import SearchBox from '../../molecules/SearchBox/SearchBox'
import clipIcon from '../../../../public/assets/icons/clip-icon.svg'

import './LandingSection.scss'

const LandingSection = () => {
  const landingContainer = useRef(null)

  // Landing Container Animation
  useEffect(() => {
    gsap.to(landingContainer.current, {
      scale: 1.1,
      y: -20,
      ease: 'ease',
      duration: 5,
      scrollTrigger: {
        trigger: landingContainer.current,
        markers: false,
        start: 'bottom center',
        scrub: true
      }
    })
  }, [])

  return (
    <div className="landing-cont bg-db py-3 w-100 ">
      <div className="overflow-hidden">
        <div
          className="inner-landing-cont container bg-gray-dark br-1 position-relative d-flex align-items-end p-4 pb-0"
          ref={landingContainer}
        >
          <div className="container">
            <div className="row">
              <div className="l-cont col-md-6 d-flex flex-column justify-content-center">
                <h1 className="mb-3 title">
                  <span
                    className="text-blue"
                    data-aos="fade-up"
                    data-aos-delay="50"
                  >
                    Start your Entrepreneurial
                  </span>
                  <br />
                  <span
                    className="text-green"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    journey with Aanoor.
                  </span>
                </h1>
                <p
                  className="text-blue mb-5"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <b>Aanoor</b> is the best place for startups to meet their
                  requirements to start their own company. We offer a wide range
                  of services, including company registration, patent
                  registration, trademark registration, and business consulting.
                  We also have a team of
                  <b>
                    <span className="text-green">
                      {' '}
                      experienced professionals{' '}
                    </span>
                  </b>
                  who can help you with every step of the process.
                </p>
              </div>
              <div className="r-cont col-md-6 d-flex justify-content-center align-items-end position-relative">
                <div
                  className="rightimg-cont"
                  data-aos="fade-up"
                  data-aos-delay="450"
                >
                  <img src={person} alt="person" />
                </div>
                <div
                  className="ring-cont"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <img src={ring} alt="ring icon" />
                </div>
                <div
                  className="dotted-cont"
                  data-aos="fade-up"
                  data-aos-delay="650"
                >
                  <img src={dotted} alt="dotted icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="green-cont bg-green" />
        </div>
        <div className="container text-white d-flex flex-column align-items-center">
          <div className="searchbox-cont">
            <SearchBox />
          </div>
          <div
            className="text-center px-4 subtitle-cont pt-5"
            data-aos="fade-up"
            data-aos-delay="550"
          >
            <p>
              A startup centre is a place where entrepreneurs can go to get help
              with starting and growing their businesses. They often offer a
              variety of services, such as business advice, networking
              opportunities, and access to funding.
            </p>
          </div>
        </div>
      </div>
      <div className="clip-icon" data-aos="fade-up" data-aos-delay="1050">
        <img src={clipIcon} alt="Clip Icon" />
      </div>
    </div>
  )
}

export default LandingSection
