import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import './RelatedBlogSection.scss'
import BlogThumbnail from '../../atoms/BlogThumbnail/BlogThumbnail'
import getEnvUrl from '../../../constants/envUrl'

const RelatedBlogSection = ({ serviceName, categoryName }) => {
  const [blogList, setBlogList] = useState([])

  useEffect(() => {
    axios
      .get(
        `${getEnvUrl}/getLimitedBlogs?service=${serviceName}&category=${categoryName}`
      )
      .then(({ data }) => {
        if (data.status === '200') {
          setBlogList(data.response)
        }
      })
  }, [serviceName, categoryName])

  return (
    blogList.length > 0 && (
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
  )
}

RelatedBlogSection.propTypes = {
  serviceName: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired
}

export default RelatedBlogSection
