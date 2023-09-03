import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './RelatedBlogSection.scss'
import BlogThumbnail from '../../atoms/BlogThumbnail/BlogThumbnail'
import getEnvUrl from '../../../constants/envUrl'

const RelatedBlogSection = () => {
  const [blogList, setBlogList] = useState([])

  useEffect(() => {
    axios.get(`${getEnvUrl}/moreBlogInfo?url=`).then(({ data }) => {
      // axios.get('/assets/json/api-mock-related.json').then(({ data }) => {
      if (data.message.length > 0 && data.status === '200') {
        setBlogList(data.message)
      }
    })
  }, [])

  return (
    <div className="Related-blog-section-cont mb-5">
      <div className="container my-4">
        <div>
          <h2
            className="mb-4 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Related Blog
          </h2>
        </div>
        <div className="row justify-content-center">
          {blogList.map((blog, index) => (
            <div
              key={(blog.title, index)}
              className="col-lg-4 col-md-6 mb-4"
              data-aos="zoom-in-up"
              data-aos-delay={index * 100 + 100}
            >
              <BlogThumbnail blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RelatedBlogSection
