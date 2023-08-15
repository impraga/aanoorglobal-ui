import React, { useEffect, useState } from 'react'
import axios from 'axios'

import HelmetWrapper from '../../components/atoms/HelmetWrapper/HelmetWrapper'
import BlogForm from '../../components/organisms/BlogForm/BlogForm'
import { apiUri, sessionKeys } from '../../constants'
import { getSessionStorage } from '../../utils/tools'

// import './.scss'

const metaDetails = {
  title: 'Blog | Annoor Global',
  canonicalUrl: 'www.aanoorglobal.com/blog/',
  metaDesc:
    'Aanoor Global provide multiple services like GST, Income tax filing',
  metaKeywords: 'gst filing, income tax filing'
}

const NewBlog = () => {
  const path = window.location.pathname.split('/')
  const editId = path[2] || false
  const [blogDetails, setBlogDetails] = useState({})

  useEffect(() => {
    axios
      .get(`${apiUri}/editBlog?id=${editId}`, {
        headers: {
          Authorization: getSessionStorage(sessionKeys.authorization)
        }
      })
      .then(({ data }) => {
        console.log(data)
        if (data.status === '200') {
          setBlogDetails(data.response[0])
        }
      })
  }, [])

  return (
    <>
      <HelmetWrapper data={metaDetails} />
      <div className="mt-5">Blog</div>
      <div className="mt-5 d-flex">
        <BlogForm edit={!!editId} blogDetails={blogDetails} />
      </div>
    </>
  )
}

export default NewBlog
