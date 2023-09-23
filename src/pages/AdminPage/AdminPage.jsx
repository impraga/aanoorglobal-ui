import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Button } from 'react-bootstrap'
import PrimaryImport from '../../utils/primaryImport'
import { sessionKeys } from '../../constants'
import { removeSession } from '../../utils/tools'
import logo from '../../../public/assets/icons/aanoor-logo.svg'

import './AdminPage.scss'

const AdminPage = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    removeSession(sessionKeys.userLoggedStatus)
    removeSession(sessionKeys.authorization)
    navigate('/')
  }
  return (
    <HelmetProvider>
      <div>
        <PrimaryImport />
        {/* <div className="admin-header">Dashboard Header</div> */}
        <div className="header">
          <div className="logo-wrapper">
            <Link to="/">
              <img src={logo} className="logo-img" alt="logo" />
            </Link>
          </div>

          <Button
            className="logout"
            variant="primary"
            onClick={() => handleClick()}
          >
            Logout
          </Button>
        </div>
        <Outlet />
        {/* <div className="admin-footer">Footer</div> */}
      </div>
    </HelmetProvider>
  )
}

AdminPage.propTypes = {
  // children: PropTypes.node.isRequired
}

export default AdminPage
