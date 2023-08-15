import React from 'react'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import axios from 'axios'
import { getSessionStorage } from '../../../utils/tools'
import { apiUri, sessionKeys } from '../../../constants'

const ProtectedComponent = ({ children }) => {
  const isLoggedIn = getSessionStorage(sessionKeys.userLoggedStatus) === 'true'
  const validateAuth = () => {
    let tokenValid = false
    axios
      .get(`${apiUri}/token`, {
        headers: {
          Authorization: getSessionStorage(sessionKeys.authorization)
        }
      })
      .then(({ data }) => {
        if (data.message === 'Token is valid' && data.status === '200') {
          tokenValid = true
        }
      })

    return tokenValid
  }

  if (!validateAuth() && !isLoggedIn) {
    return <Navigate to="/login" replace />
  }
  return children
}

ProtectedComponent.propTypes = {
  children: PropTypes.node.isRequired
}

export default ProtectedComponent
