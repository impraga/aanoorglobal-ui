import React from 'react'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { getSessionStorage } from '../../../utils/tools'
import { sessionKeys } from '../../../constants'

const ProtectedComponent = ({ children }) => {
  const isLoggedIn = getSessionStorage(sessionKeys.userLoggedStatus) === 'true'

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />
  }
  return children
}

ProtectedComponent.propTypes = {
  children: PropTypes.node.isRequired
}

export default ProtectedComponent
