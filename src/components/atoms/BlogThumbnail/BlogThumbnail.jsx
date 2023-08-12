import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import clockSvg from '../../../../public/assets/icons/clock.svg'

import './BlogThumbnail.scss'

const BlogThumbnail = ({ blog }) => (
  <Link to="/blog">
    <div className="blogthumbnail-cont br-1 overflow-hidden bs h-100">
      <div className="thumbnail-img position-relative">
        <img src={blog.imgUrl} alt="" />
        <div className="img-overlay" />
        <div className="read-time-cont d-flex text-white align-items-center">
          <div className="img-cont">
            <img src={clockSvg} alt="Read Time" />
          </div>
          <div>{blog.read} mins read</div>
        </div>
      </div>
      <div className="card-cont bg-white h-100 p-3">
        <h3>{blog.title}</h3>
        <div className="tag-cont d-flex flex-wrap ">
          {blog.tag.map((tag, index) => (
            <div key={(tag, index)} className="tag br-1 text-white bg-db">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  </Link>
)

BlogThumbnail.propTypes = {
  blog: PropTypes.shape()
}

BlogThumbnail.defaultProps = {
  blog: {}
}

export default BlogThumbnail
