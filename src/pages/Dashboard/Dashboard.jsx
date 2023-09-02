import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import HelmetWrapper from '../../components/atoms/HelmetWrapper/HelmetWrapper'

// import DashboardMetrics from '../../components/atoms/DashboardMetrics/DashboardMetrics'
import DashboardTable from '../../components/atoms/DashboardTable/DashboardTable'
import { getSessionStorage } from '../../utils/tools'
import { apiUri, sessionKeys } from '../../constants'

import './Dashboard.scss'

const metaDetails = {
  title: 'Dashboard | Annoor Global',
  canonicalUrl: 'www.aanoorglobal.com/dashboard/',
  metaDesc:
    'Aanoor Global provide multiple services like GST, Income tax filing',
  metaKeywords: 'gst filing, income tax filing'
}

const Dashboard = () => {
  const [blogList, setBlogList] = useState([])
  const [blogStatus, setBlogStatus] = useState({ active: 0, inactive: 0 })

  useEffect(() => {
    getBlog()
  }, [])

  useEffect(() => {
    const activeBlogCount = blogList?.filter((d) => d.status === '2').length
    const inActiveBlogCount = blogList?.filter((d) => d.status === '1').length
    setBlogStatus({ active: activeBlogCount, inactive: inActiveBlogCount })
  }, [blogList])

  const getBlog = () => {
    axios
      .get(`${apiUri}/getBlogLists`, {
        // .get('/assets/json/api-mock-bloglist.json', {
        headers: {
          Authorization: getSessionStorage(sessionKeys.authorization)
        }
      })
      .then(({ data }) => {
        console.log(data)
        if (data.message.length > 0 && data.status === '200') {
          setBlogList(data.message)
        }
      })
      .catch(() => {
        console.log('Error in receiving Blog details')
      })
  }

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
                <div
                  key="published"
                  className="d-stats-cont d-flex br-1 justify-content-between align-items-center"
                >
                  <div>Published Blog</div>
                  <div className="bebas value">{blogStatus.active}</div>
                </div>
                <div
                  key="Draft Blog"
                  className="d-stats-cont d-flex br-1 justify-content-between align-items-center"
                >
                  <div>Draft Blog</div>
                  <div className="bebas value">{blogStatus.inactive}</div>
                </div>
              </div>
            </div>
          </div>
          {/* Part of enhancemnet */}
          {/* <DashboardMetrics /> */}
          {/* Part of enhancemnet */}
          <div className="overlay-text bebas">Dashboard</div>
          <DashboardTable
            blogListInput={blogList}
            updateBlog={() => getBlog()}
          />
        </div>
        <div className="bg-drop bg-db" />
      </div>
    </>
  )
}

export default Dashboard
