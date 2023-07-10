import React from 'react'
import './LandingSection.scss'
// import Images
import person from '../../../../public/assets/images/person.png'
import ring from '../../../../public/assets/icons/ring.svg'
import dotted from '../../../../public/assets/icons/dotted-icon.svg'
import SearchBox from '../../molecules/SearchBox/SearchBox'
import clipIcon from '../../../../public/assets/icons/clip-icon.svg'

const LandingSection = () => (
  <div className="landing-cont bg-db py-3 w-100">
    <div className="inner-landing-cont container bg-gray-dark br-1 position-relative d-flex align-items-end p-4 pb-0" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="l-cont col-md-6 d-flex flex-column justify-content-center">
            <h1 className="mb-3 title">
              <span className="text-blue" data-aos="fade-up" data-aos-delay="50">Welcome</span>
              <br />
              <span className="text-green" data-aos="fade-up" data-aos-delay="100">Entrepreneurs.</span>
            </h1>
            <p className="text-blue mb-4" data-aos="fade-up" data-aos-delay="200">
              <b>Aanoor Global</b> is solely operating with the dynamic,
              enterprising environment for all your
              <b>
                <span className="text-green">business registrations</span>
              </b>
              . Smart & quick work ability, professionals, and the pragmatic
              approach are considered to be some essential stream of our
              business services. We have developed an outstanding reputation
              among multiple companies through our <b>excellent services</b>.
            </p>
          </div>
          <div className="r-cont col-md-6 d-flex justify-content-center position-relative">
            <div className="rightimg-cont" data-aos="fade-up" data-aos-delay="450">
              <img src={person} alt="person" />
            </div>
            <div className="ring-cont" data-aos="fade-up" data-aos-delay="800">
              <img src={ring} alt="ring icon" />
            </div>
            <div className="dotted-cont" data-aos="fade-up" data-aos-delay="650">
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
      <div className="text-center px-4 subtitle-cont pt-5" data-aos="fade-up" data-aos-delay="550">
        <p>
          We incorporate different businesses like Private Banks, Non-Profit
          companies, Information Technologies, Financial Institutions,
          International companies, Societies, Trusts, E-commerce, and more. Our
          business approach is to follow the friendliness and formal business
          efficiency in all the works we perform.
        </p>
      </div>
    </div>
    <div className='clip-icon' data-aos="fade-up" data-aos-delay="1050">
      <img src={clipIcon} alt="Clip Icon" />
    </div>
  </div>
)

export default LandingSection
