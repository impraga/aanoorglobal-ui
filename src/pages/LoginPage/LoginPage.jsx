/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

import { Navigate } from 'react-router'
import { setSessionStorage } from '../../utils/tools'
import { sessionKeys, isUserLoggedIn } from '../../constants'

import './LoginPage.scss'
import getEnvUrl from '../../constants/envUrl'

import rightBg from '../../../public/assets/images/intellectual-property-bg.svg'

const LoginPage = () => {
  const [onSubmitForm, setOnSubmitForm] = useState('empty')
  const [loginVerified, setLoginVerified] = useState(false)
  const [userAddedNotfication, setUserAddedNotification] = useState(false)

  const {
    register,
    formState: { errors },
    handleSubmit: handleSingUpSubmit,
    reset: signUpReset
  } = useForm()
  const {
    register: loginForm,
    formState: { errors: loginError },
    handleSubmit: handleLoginSubmit,
    reset: loginReset
  } = useForm()

  const onSignUpSubmit = (data) => {
    setOnSubmitForm('onclick')
    console.log(data)

    const url = `${getEnvUrl}/createUser`
    axios
      .post(url, JSON.stringify(data), {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        if (res.data.status === '200' && res.data.message === 'USER ADDED') {
          setUserAddedNotification(true)
          console.log('contact added')
          signUpReset()
          setOnSubmitForm('Validated')
        } else {
          console.log('error in adding user')
          setOnSubmitForm('error')
        }
      })
      .catch((err) => {
        setOnSubmitForm('error')
        console.log('Login Verification failed', err)
      })
  }

  const onLoginSubmit = (data) => {
    console.log(data)
    setOnSubmitForm('onclickLog')

    const url = `${getEnvUrl}/loginUser`
    axios
      .post(url, JSON.stringify(data))
      .then((res) => {
        if (res.data.status === '200' && res.data.message === 'VERIFIED') {
          setSessionStorage(sessionKeys.userLoggedStatus, 'true')
          setSessionStorage(sessionKeys.authorization, res.data.accessToken)
          setLoginVerified(true)
          loginReset()
          setOnSubmitForm('Validated')
          console.log('login Verified')
        } else {
          setOnSubmitForm('errorLog')
          console.log('Login Verification failed')
        }
      })
      .catch((err) => {
        setOnSubmitForm('errorLog')
        console.log('Login Verification failed', err)
      })
  }

  return (
    <>
      {(loginVerified || isUserLoggedIn) && (
        <Navigate to="/admin/dashboard" replace />
      )}
      {userAddedNotfication && <p>User Added successfully</p>}
      <div className="login-page-cont pe-0 pe-md-5 justify-content-center justify-content-md-end position-relative">
        <div className="form-cont pe-0 pe-md-5 ">
          <input
            id="input"
            className="toggle-input"
            defaultChecked="true"
            type="checkbox"
          />
          <div className="toggle-cont">
            <label htmlFor="input" className="toggle">
              <span className="text sign-text">Sign Up</span>
              <span className="icon">
                <svg
                  className="arrow"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="32"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                  />
                </svg>
              </span>
              <span className="text log-text">Log In</span>
            </label>
          </div>

          <div className="card">
            <div className="content sign">
              <h2 className="title">Sign Up</h2>
              <form
                className="ag-form"
                onSubmit={handleSingUpSubmit(onSignUpSubmit)}
              >
                <div className="fields">
                  <label className="field">
                    <div className="icon">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                        </g>
                      </svg>
                    </div>
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
                  </label>
                  <label className="field">
                    <div className="icon">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                        </g>
                      </svg>
                    </div>
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
                  </label>
                  <label className="field">
                    <div className="icon">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                        </g>
                      </svg>
                    </div>
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
                  </label>

                  <label className="field">
                    <div className="icon">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="12" r="4" />
                        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
                      </svg>
                    </div>
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
                  </label>

                  <label className="field">
                    <div className="icon">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2C9.243 2 7 4.243 7 7v2H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9V7zm9.002 13H13v-2.278c.595-.347 1-.985 1-1.722 0-1.103-.897-2-2-2s-2 .897-2 2c0 .736.405 1.375 1 1.722V20H6v-9h12l.002 9z" />
                      </svg>
                    </div>
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
                  </label>
                </div>
                <div className="submit">
                  <button
                    aria-label="Submit"
                    type="submit"
                    className={`btn-submit ${
                      onSubmitForm === 'onclick' ? 'onclick' : ''
                    } ${onSubmitForm === 'Validated' ? 'validated' : ''} ${
                      onSubmitForm === 'error' ? 'errorMail' : ''
                    }`}
                  />
                </div>
              </form>
            </div>
            <div className="content log">
              <h2 className="title">Log In</h2>
              <form
                className="ag-form"
                onSubmit={handleLoginSubmit(onLoginSubmit)}
              >
                <div className="fields">
                  <label className="field">
                    <div className="icon">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="12" r="4" />
                        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
                      </svg>
                    </div>
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
                  </label>

                  <label className="field">
                    <div className="icon">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2C9.243 2 7 4.243 7 7v2H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9V7zm9.002 13H13v-2.278c.595-.347 1-.985 1-1.722 0-1.103-.897-2-2-2s-2 .897-2 2c0 .736.405 1.375 1 1.722V20H6v-9h12l.002 9z" />
                      </svg>
                    </div>
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
                  </label>
                </div>

                <div className="submit">
                  <button
                    aria-label="Submit"
                    type="submit"
                    className={`btn-submit ${
                      onSubmitForm === 'onclickLog' ? 'onclick' : ''
                    } ${onSubmitForm === 'ValidatedLog' ? 'validated' : ''} ${
                      onSubmitForm === 'errorLog' ? 'errorMail' : ''
                    }`}
                  />
                </div>
              </form>
            </div>
          </div>
          {/* <div className="mt-3 text-white">
            Developed with <span className="love">♥</span> by{' '}
            <a
              className="text-green"
              href="https://www.praga.co.in"
              rel="noreferrer"
              target="_blank"
            >
              Praga.co.in
            </a>
          </div> */}
        </div>
        <div className="right-bg d-none d-md-flex">
          <img src={rightBg} alt="decorative" />
        </div>
      </div>
    </>
  )
}

export default React.memo(LoginPage)
