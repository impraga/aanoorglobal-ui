/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-console */
import React, { useMemo, useState } from 'react'

import { useForm } from 'react-hook-form'
import category from '../../../../public/assets/json/service.json'
import { services } from '../../../constants'

import './ContactForm.scss'

const ContactForm = () => {
  const currentUrl = document.location.pathname
  const [selectActive, setSelectActive] = useState(false)
  const [onSubmitForm, setOnSubmitForm] = useState('empty')
  const [selectedService, setSelectedService] = useState(null)
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
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
    setOnSubmitForm('onclick')

    setTimeout(() => {
      reset()
      setOnSubmitForm('Validated')

      setTimeout(() => {
        setOnSubmitForm('empty')
      }, 2000)
    }, 5000)
    console.log(data)
  }

  return (
    <div className="container px-0 contform-cont">
      <div className="row w-100 mx-0">
        <div className="col-md-5 d-md-block d-none left-cont">
          <div className="artbord-cont bg-db h-100 d-flex flex-column justify-content-center">
            <div data-aos="fade-up" data-aos-delay="50">
              Just <span className="text-green">one step away</span>
              <br /> from connecting
            </div>
          </div>
        </div>
        <div className="col form-cont d-flex flex-column justify-content-center">
          <div className="header-form" data-aos="fade-up">
            <h1>
              Get in <span>touch with us</span> for more information
            </h1>
          </div>
          <div className="container form px-0 d-flex flex-column justify-content-between">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div className="row">
                  <div
                    className="col-12"
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
                      className={
                        errors.firstName?.type === 'required' ? 'error' : ' '
                      }
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...register('firstName', { required: true })}
                      aria-invalid={errors.firstName ? 'true' : 'false'}
                    />
                    {/* {errors.firstName?.type === 'required' && (
                    <p className="form-error text-danger">Name is required</p>
                  )} */}
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
                      className={
                        errors.mail?.type === 'required' ? 'error' : ' '
                      }
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...register('mail', {
                        required: 'Email address is required'
                      })}
                      aria-invalid={errors.mail ? 'true' : 'false'}
                    />
                    {/* {errors.mail && (
                    <p className="form-error text-danger">
                      {errors.mail?.message}
                    </p>
                  )} */}
                  </div>
                  <div
                    className="col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <input
                      type="number"
                      placeholder="Phone Number"
                      className={
                        errors.number?.type === 'required' ? 'error' : ' '
                      }
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...register('number', { required: true })}
                      aria-invalid={errors.number ? 'true' : 'false'}
                    />
                    {/* {errors.number?.type === 'required' && (
                    <p className="form-error text-danger">
                      Phone number is required
                    </p>
                  )} */}
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-12"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className={`select ${selectActive ? ' active' : ''}`}>
                      <input
                        type="text"
                        className={
                          errors.services?.type === 'required' ? 'error' : ' '
                        }
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
                      {/* {errors.services && (
                      <p className="form-error text-danger">
                        {errors.services?.message}
                      </p>
                    )} */}
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
                  <div
                    className="col-12"
                    data-aos="fade-up"
                    data-aos-delay="250"
                  >
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
              </div>

              <div className="row">
                {/* <div className="col-6" data-aos="fade-up" data-aos-delay="300">
                  <input
                    type="button"
                    className="btn btn-secondary"
                    value="Cancel"
                  />
                </div> */}
                <div className="col-6" data-aos="fade-up" data-aos-delay="300">
                  <button
                    type="submit"
                    className={`btn-submit ${
                      onSubmitForm === 'onclick' ? 'onclick' : ''
                    } ${onSubmitForm === 'Validated' ? 'validated' : ''} ${
                      onSubmitForm === 'error' ? 'error' : ''
                    }`}
                    // value="Submit"
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
