import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'
import HelmetWrapper from '../../components/atoms/HelmetWrapper/HelmetWrapper'
import BlogForm from '../../components/organisms/BlogForm/BlogForm'
import { sessionKeys } from '../../constants'
import { getSessionStorage } from '../../utils/tools'
import getEnvUrl from '../../constants/envUrl'

// import './.scss'

const metaDetails = {
  title: 'Blog | Annoor Global',
  canonicalUrl: 'www.aanoorglobal.com/blog/',
  metaDesc:
    'Aanoor Global provide multiple services like GST, Income tax filing',
  metaKeywords: 'gst filing, income tax filing',
  dontCrawl: true
}

const NewBlog = () => {
  const path = window.location.pathname.split('/')
  const editId = path[3] || false

  const [blogDetails, setBlogDetails] = useState({})

  useEffect(() => {
    axios
      .get(`${getEnvUrl}/editBlog?id=${editId}`, {
        headers: {
          Authorization: getSessionStorage(sessionKeys.authorization)
        }
      })
      .then(({ data }) => {
        // eslint-disable-next-line no-console
        console.log(data)
        if (data.status === '200') {
          setBlogDetails(data.response[0])
        }
      })
  }, [])

  return (
    <>
      <HelmetWrapper data={metaDetails} />
      <div className="mt-5">
        <h2 className="text-center">{editId ? 'Edit' : 'Add'} Blog</h2>
        <Link className="btn btn-secondary" to="/admin/dashboard">
          Back to Dashboard
        </Link>
      </div>
      <div className="mt-5 d-flex">
        <BlogForm edit={!!editId} blogDetails={blogDetails} />
      </div>
    </>
  )
}

export default NewBlog
