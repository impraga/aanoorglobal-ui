import React, { useState } from 'react'
import './ContactForm.scss'
import { services } from '../../../constants'

const ContactForm = () => {
  const [selectActive, setSelectActive] = useState(false)
  const [selectedService, setSelectedService] = useState(services[0])

  const changeService = (service) => {
    setSelectedService(service)
    setSelectActive(false)
  }

  return (
    <div className="container px-0 contform-cont">
      <div className="row h-100 w-100">
        <div className="col-md-5 d-md-block d-none">
          <div className="artbord-cont bg-db h-100" />
        </div>
        <div className="col form-cont">
          <div className="header-form mt-4" data-aos="fade-up">
            <h1>
              Get in <span>touch with us</span> for more information
            </h1>
          </div>
          <div className="container form px-0">
            <form>
              <div className="row">
                <div
                  className="col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <input type="text" placeholder="Name" />
                </div>
                <div
                  className="col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <input type="number" placeholder="Phone Number" />
                </div>
              </div>
              <div className="row">
                <div
                  className="col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <input type="email" placeholder="E-Mail" />
                </div>
                <div
                  className="col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className={`select ${selectActive ? ' active' : ''}`}>
                    <button
                      type="button"
                      className="ng-binding"
                      onClick={() => {
                        setSelectActive(true)
                      }}
                    >
                      {selectedService}
                    </button>
                    <ul className="md-whiteframe-z1" name="ul-id">
                      {services.map((service) => (
                        <li
                          // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
                          role="option"
                          key={service}
                          onClick={() => {
                            changeService(service)
                          }}
                          className={`${
                            selectedService === service ? ' active' : ''
                          }`}
                          tabIndex="-1"
                          aria-hidden
                        >
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12" data-aos="fade-up" data-aos-delay="250">
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Message"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

// ServiceCategory.propTypes = {
//   service: PropTypes.shape().isRequired,
//   selectedCategory: PropTypes.string.isRequired
// }

export default ContactForm
