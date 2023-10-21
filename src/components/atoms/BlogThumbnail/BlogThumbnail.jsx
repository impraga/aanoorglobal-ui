import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as DOMPurify from 'dompurify'

import clockSvg from '../../../../public/assets/icons/clock.svg'

import { getEnvUploadPath } from '../../../constants/envUrl'

import './BlogThumbnail.scss'

const BlogThumbnail = ({ blog }) => {
  const cleanHTML = DOMPurify.sanitize(blog.content)
  return (
    <div className="blogthumbnail-cont br-1 overflow-hidden bs h-100">
      <Link to={`/post/${blog.post_url}`}>
        <div className="thumbnail-img position-relative">
          <img src={getEnvUploadPath + blog.image_name} alt={blog.title} />
          <div className="img-overlay" />
          <div className="read-time-cont d-flex text-white align-items-center">
            <div className="img-cont">
              <img src={clockSvg} alt="Read Time" />
            </div>
            <div>{blog.read_time} mins read</div>
          </div>
        </div>
      </Link>

      <div className="card-cont bg-white h-100 p-3">
        <Link to={`/post/${blog.post_url}`}>
          <h3>{blog.title}</h3>
        </Link>
        <div className="bt-blog-content">
          <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />
        </div>
        <div className="tag-cont d-flex flex-wrap ">
          {blog.tags?.split(';') &&
            blog.tags?.split(';').map(
              (tag, index) =>
                tag?.trim() && (
                  <Link
                    key={(tag.trim(), index)}
                    to={`/blog/tag/${tag.trim()}`}
                  >
                    <div
                      key={(tag.trim(), index)}
                      className="tag br-1 text-white bg-db"
                    >
                      {tag.trim()}
                    </div>
                  </Link>
                )
            )}
        </div>
      </div>
    </div>
  )
}
BlogThumbnail.propTypes = {
  blog: PropTypes.shape()
}

BlogThumbnail.defaultProps = {
  blog: {}
}

export default BlogThumbnail
