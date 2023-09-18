/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-console */
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { FormProvider, useForm } from 'react-hook-form'
import axios from 'axios'

import ServiceDropDown from '../../atoms/ServiceDropDown/ServiceDropDown'
import getEnvUrl from '../../../constants/envUrl'

import './ContactForm.scss'

const ContactForm = ({ hideMessage }) => {
  const [onSubmitForm, setOnSubmitForm] = useState('empty')
  const methods = useForm()

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue
  } = methods

  const updateServiceValue = (value) => {
    if (value) setValue('services', value, { shouldValidate: true })
  }

  const onSubmit = (data) => {
    setOnSubmitForm('onclick')

    const url = `${getEnvUrl}/updateContact`
    axios
      .post(url, JSON.stringify(data), {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        if (res.data.status === '200') {
          console.log('contact added')
          reset()
          setOnSubmitForm('Validated')
        } else {
          setOnSubmitForm('error')
          console.log('error in uploading')
        }
      })
      .catch(() => {
        console.log('error in uploading2')
        setOnSubmitForm('error')
      })
  }

  return (
    <div className="container px-0 contform-cont">
      <div className="row w-100 mx-0">
        {!hideMessage && (
          <div className="col-md-5 d-md-block d-none left-cont">
            <div className="artbord-cont bg-db h-100 d-flex flex-column justify-content-center">
              <div data-aos="fade-up" data-aos-delay="50">
                Just <span className="text-green">one step away</span>
                <br /> from connecting
              </div>
            </div>
          </div>
        )}
        <div className="col form-cont d-flex flex-column justify-content-center">
          <div className="header-form mt-2" data-aos="fade-up">
            <h1>
              Get in <span>touch with us</span> for more information
            </h1>
          </div>
          <div className="container form ag-form px-0 d-flex flex-column justify-content-between">
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <FormProvider {...methods}>
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
                      <ServiceDropDown updateValue={updateServiceValue} />
                    </div>
                  </div>
                  {!hideMessage && (
                    <div className="row">
                      <div
                        className="col-12"
                        data-aos="fade-up"
                        data-aos-delay="250"
                      >
                        <textarea
                          id="message"
                          name="message"
                          rows="5"
                          placeholder="Message"
                          // eslint-disable-next-line react/jsx-props-no-spreading
                          {...register('message', {
                            required: false
                          })}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="row">
                  {/* <div className="col-6" data-aos="fade-up" data-aos-delay="300">
                  <input
                    type="button"
                    className="btn btn-secondary"
                    value="Cancel"
                  />
                </div> */}
                  <div
                    className="col-6 pb-3"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <button
                      type="submit"
                      className={`btn-submit ${
                        onSubmitForm === 'onclick' ? 'onclick' : ''
                      } ${onSubmitForm === 'Validated' ? 'validated' : ''} ${
                        onSubmitForm === 'error' ? 'errorMail' : ''
                      }`}
                      // value="Submit"
                    />
                  </div>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

ContactForm.propTypes = {
  hideMessage: PropTypes.bool
}

ContactForm.defaultProps = {
  hideMessage: false
}

export default ContactForm
