/* eslint-disable no-console */
import React, { useMemo, useState } from 'react'

import { useForm } from 'react-hook-form'
import category from '../../../../public/assets/json/service.json'
import { services } from '../../../constants'

import './ContactForm.scss'

const ContactForm = () => {
  const currentUrl = document.location.pathname
  const [selectActive, setSelectActive] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()

  const serviceCategory = useMemo(() => {
    const flatCategory = [...services]
    category.forEach((value) => {
      value.child.forEach((service) => {
        flatCategory.push({ title: service.title, url: service.url })
      })
    })
    setSelectedService(
      flatCategory.find((d) => currentUrl === d.url)?.title || services[0].title
    )
    return flatCategory
  }, [])

  const changeService = (service) => {
    setSelectedService(service)
    setSelectActive(false)
  }

  const onSubmit = (data) => {
    const url = 'http://localhost/Aanoor/aanoor-server/api/updateContact'
    fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ ...data, service: selectedService })
    }).then((res) => {
      if (res.status === 200) {
        console.log('contact added')
      } else {
        console.log('error in uploading')
      }
    })
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div
                  className="col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <input
                    type="hidden"
                    name="page"
                    value={document.location.href}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...register('page', {})}
                  />
                  <input
                    type="text"
                    placeholder="Name"
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...register('firstName', { required: true })}
                    aria-invalid={errors.firstName ? 'true' : 'false'}
                  />
                  {errors.firstName?.type === 'required' && (
                    <p className="form-error text-danger">Name is required</p>
                  )}
                </div>
                <div
                  className="col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <input
                    type="number"
                    placeholder="Phone Number"
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...register('number', { required: true })}
                    aria-invalid={errors.number ? 'true' : 'false'}
                  />
                  {errors.number?.type === 'required' && (
                    <p className="form-error text-danger">
                      Phone number is required
                    </p>
                  )}
                </div>
              </div>
              <div className="row">
                <div
                  className="col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <input
                    type="email"
                    placeholder="E-Mail"
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...register('mail', {
                      required: 'Email address is required'
                    })}
                    aria-invalid={errors.mail ? 'true' : 'false'}
                  />
                  {errors.mail && (
                    <p className="form-error text-danger">
                      {errors.mail?.message}
                    </p>
                  )}
                </div>
                <div
                  className="col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className={`select ${selectActive ? ' active' : ''}`}>
                    <input
                      type="text"
                      className="ng-binding"
                      placeholder="Services looking for?"
                      onClick={() => {
                        setSelectActive(true)
                      }}
                      value={selectedService}
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...register('services', {
                        required: 'Select atleast one services'
                      })}
                      aria-invalid={errors.services ? 'true' : 'false'}
                    />
                    {errors.services && (
                      <p className="form-error text-danger">
                        {errors.services?.message}
                      </p>
                    )}
                    {/* {selectedService} */}
                    <ul className="md-whiteframe-z1" name="ul-id">
                      {serviceCategory.map((service) => (
                        <li
                          // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
                          role="option"
                          key={service.title}
                          onClick={() => {
                            changeService(service.title)
                          }}
                          className={`${
                            selectedService === service.title ? ' active' : ''
                          }`}
                          tabIndex="-1"
                          aria-hidden
                        >
                          {service.title}
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
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...register('message', {
                      required: false
                    })}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6" data-aos="fade-up" data-aos-delay="300">
                  <input
                    type="button"
                    className="btn btn-secondary"
                    value="Cancel"
                  />
                </div>
                <div className="col-6" data-aos="fade-up" data-aos-delay="300">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Submit"
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

export default React.memo(ContactForm)
