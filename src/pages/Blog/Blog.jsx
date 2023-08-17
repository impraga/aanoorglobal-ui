import React, { useEffect, useState } from 'react'
import axios from 'axios'

import HelmetWrapper from '../../components/atoms/HelmetWrapper/HelmetWrapper'

import BlogThumbnail from '../../components/atoms/BlogThumbnail/BlogThumbnail'

import { apiUri } from '../../constants'

import './Blog.scss'

const metaDetails = {
  title: 'Blog | Annoor Global',
  canonicalUrl: 'www.aanoorglobal.com/blog/',
  metaDesc:
    'Aanoor Global provide multiple services like GST, Income tax filing',
  metaKeywords: 'gst filing, income tax filing'
}

const Blog = () => {
  const [blogList, setBlogList] = useState([])

  useEffect(() => {
    axios.get(`${apiUri}/getBlogLists`).then(({ data }) => {
      if (data.message.length > 0 && data.status === '200') {
        setBlogList(data.message)
      }
    })
  }, [])

  return (
    <>
      <HelmetWrapper data={metaDetails} />
      <div className="mt-5">Blog</div>
      <div className="mt-5 d-flex">
        {blogList.map((d) => (
          <BlogThumbnail blog={d} />
        ))}
      </div>
    </>
  )
}

export default Blog
