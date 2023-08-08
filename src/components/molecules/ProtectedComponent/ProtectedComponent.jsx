import React from 'react'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProtectedComponent = ({ isLoggedIn = true, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />
  }
  return children
}

ProtectedComponent.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

export default ProtectedComponent
