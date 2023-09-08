import React from 'react'
import { Outlet } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import PrimaryImport from '../../utils/primaryImport'

const AdminPage = () => (
  <HelmetProvider>
    <div>
      <PrimaryImport />
      <div className="admin-header">Dashboard Header</div>
      <Outlet />
      <div className="admin-footer">Footer</div>
    </div>
  </HelmetProvider>
)

AdminPage.propTypes = {
  // children: PropTypes.node.isRequired
}

export default AdminPage
