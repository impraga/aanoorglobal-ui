import React from 'react'
import PropTypes from 'prop-types'

import './BlogThumbnail.scss'

const BlogThumbnail = () => {
  const details = {
    title: 'Procedure for Registration of Trademark In India',
    tag: ['Logo registration', 'Trademark registration', 'Property'],
    read: '2',
    imgUrl: '/assets/images/blog.jpg',
    pageUrl: ''
  }
  return (
    <div className="blogthumbnail-cont br-1 overflow-hidden bs">
      <div className="thumbnail-img position-relative">
        <img src={details.imgUrl} alt="" />
        <div className="img-overlay" />
      </div>
      <div className="card-cont bg-white h-100 p-3">
        <h3>{details.title}</h3>
        <div className="tag-cont d-flex flex-wrap ">
          {details.tag.map((tag) => (
            <div className="tag br-1 text-white bg-db">{tag}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

BlogThumbnail.propTypes = {
  // details: PropTypes.shape()
}

BlogThumbnail.defaultProps = {
  details: {}
}

export default BlogThumbnail
