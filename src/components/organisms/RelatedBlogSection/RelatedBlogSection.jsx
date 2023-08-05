import React from 'react'
import PropTypes from 'prop-types'

import './RelatedBlogSection.scss'
import BlogThumbnail from '../../atoms/BlogThumbnail/BlogThumbnail'

const RelatedBlogSection = () => {
  const blogList = [
    {
      title: 'Procedure for Registration of Trademark In India',
      tag: ['Logo registration', 'Trademark registration', 'Property'],
      read: '2',
      imgUrl: '/assets/images/blog.jpg',
      pageUrl: ''
    },
    {
      title: 'Procedure for GST Filing In India',
      tag: ['Logo registration', 'Trademark registration', 'Property'],
      read: '4',
      imgUrl: '/assets/images/blog.jpg',
      pageUrl: ''
    },
    {
      title: 'Procedure for Registration of Copyright In India',
      tag: ['Logo registration', 'Trademark registration', 'Property'],
      read: '3',
      imgUrl: '/assets/images/blog.jpg',
      pageUrl: ''
    }
  ]

  return (
    <div className="Related-blog-section-cont mb-5">
      <div className="container my-4">
        <div>
          <h2 className="mb-4 text-center">Related Blog</h2>
        </div>
        <div className="row justify-content-center">
          {blogList.map((blog) => (
            <div key={blog.title} className="col-lg-4 col-md-6 mb-4">
              <BlogThumbnail blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// RelatedBlogSection.propTypes = {
//   blogList: PropTypes.shape()
// }

export default RelatedBlogSection
