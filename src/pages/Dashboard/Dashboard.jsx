import React from 'react'
import { Link } from 'react-router-dom'
import HelmetWrapper from '../../components/atoms/HelmetWrapper/HelmetWrapper'

import './Dashboard.scss'
import DashboardMetrics from '../../components/atoms/DashboardMetrics/DashboardMetrics'
import DashboardTable from '../../components/atoms/DashboardTable/DashboardTable'

const metaDetails = {
  title: 'Dashboard | Annoor Global',
  canonicalUrl: 'www.aanoorglobal.com/dashboard/',
  metaDesc:
    'Aanoor Global provide multiple services like GST, Income tax filing',
  metaKeywords: 'gst filing, income tax filing'
}

const Dashboard = () => {
  // Value from API
  const overallStats = [
    { title: 'Published Blog', value: 120 },
    { title: 'Draft Blog', value: 10 }
  ]
  return (
    <>
      <HelmetWrapper data={metaDetails} />
      <div className="position-relative pt-5">
        <div className="d-cont px-2 py-5 mt-5 position-relative">
          <div className="d-flex align-items-end justify-content-center justify-content-lg-end w-100">
            <div className="btn-cont d-flex flex-column ">
              <Link to="/new-blog">
                <div className="create-btn bg-green text-white br-1">
                  Create New Blog
                </div>
              </Link>
              <div className="overall-stat-cont d-flex flex-md-row flex-column">
                {overallStats.map((stats) => (
                  <div
                    key={stats.title}
                    className="d-stats-cont d-flex br-1 justify-content-between align-items-center"
                  >
                    <div>{stats.title}</div>
                    <div className="bebas value">{stats.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <DashboardMetrics />
          <div className="overlay-text bebas">Dashboard</div>
          <DashboardTable />
        </div>
        <div className="bg-drop bg-db" />
      </div>
    </>
  )
}

export default Dashboard
