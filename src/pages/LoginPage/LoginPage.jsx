/* eslint-disable no-console */
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import './LoginPage.scss'

const LoginPage = () => {
  const [onSubmitForm, setOnSubmitForm] = useState('empty')

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm()
  const {
    register: loginForm,
    formState: { errors: loginError },
    handleSubmit: handleLoginSubmit,
    reset: loginReset
  } = useForm()

  const onSubmit = (data) => {
    setOnSubmitForm('onclick')
    console.log(data)

    const url = 'http://localhost/Aanoor/aanoor-server/api/createUser'
    fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(data)
    }).then((res) => {
      if (res.status === 200) {
        console.log('contact added')
        // reset()
        setOnSubmitForm('Validated')
      } else {
        console.log('error in uploading')
      }
    })
  }

  const onLoginSubmit = (data) => {
    setOnSubmitForm('onclick')
    console.log(data)

    const url = 'http://localhost/Aanoor/aanoor-server/api/loginUser'
    fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(data)
    }).then((res) => {
      if (res.status === 200) {
        console.log('contact added')
        // reset()
        setOnSubmitForm('Validated')
      } else {
        console.log('error in uploading')
      }
    })
  }

  return (
    <div className="login-page">
      <div
        className="container form ag-form px-0 d-flex flex-column justify-content-between"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="row">
              <div className="col-12" data-aos="fade-up" data-aos-delay="50">
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
              <div className="col-sm-6" data-aos="fade-up" data-aos-delay="150">
                <input
                  type="email"
                  placeholder="E-Mail"
                  className={errors.mail?.type === 'required' ? 'error' : ' '}
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
              <div className="col-sm-6" data-aos="fade-up" data-aos-delay="100">
                <input
                  type="number"
                  placeholder="Phone Number"
                  className={errors.number?.type === 'required' ? 'error' : ' '}
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
              <div className="col-12" data-aos="fade-up" data-aos-delay="50">
                <input
                  type="text"
                  placeholder="Username"
                  className={
                    errors.username?.type === 'required' ? 'error' : ' '
                  }
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register('username', { required: true })}
                  aria-invalid={errors.username ? 'true' : 'false'}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6" data-aos="fade-up" data-aos-delay="150">
                <input
                  type="password"
                  placeholder="Password"
                  className={
                    errors.password?.type === 'required' ? 'error' : ' '
                  }
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register('password', {
                    required: 'Password address is required'
                  })}
                  aria-invalid={errors.password ? 'true' : 'false'}
                />
              </div>
            </div>

            <div className="row">
              <div
                className="col-6 pb-3"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <button
                  aria-label="Submit"
                  type="submit"
                  className={`btn-submit ${
                    onSubmitForm === 'onclick' ? 'onclick' : ''
                  } ${onSubmitForm === 'Validated' ? 'validated' : ''} ${
                    onSubmitForm === 'error' ? 'error' : ''
                  }`}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div
        className="container form ag-form px-0 d-flex flex-column justify-content-between"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        <form onSubmit={handleLoginSubmit(onLoginSubmit)}>
          <div>
            <div className="row">
              <div className="col-12" data-aos="fade-up" data-aos-delay="50">
                <input
                  type="text"
                  placeholder="Username"
                  className={
                    loginError.username?.type === 'required' ? 'error' : ' '
                  }
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...loginForm('username', { required: true })}
                  aria-invalid={loginError.username ? 'true' : 'false'}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6" data-aos="fade-up" data-aos-delay="150">
                <input
                  type="password"
                  placeholder="Password"
                  className={
                    loginError.password?.type === 'required' ? 'error' : ' '
                  }
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...loginForm('password', {
                    required: 'Password address is required'
                  })}
                  aria-invalid={loginError.password ? 'true' : 'false'}
                />
              </div>
            </div>

            <div className="row">
              <div
                className="col-6 pb-3"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <button
                  aria-label="Submit"
                  type="submit"
                  className={`btn-submit `}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
