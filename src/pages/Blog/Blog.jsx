import React from 'react'

import HelmetWrapper from '../../components/atoms/HelmetWrapper/HelmetWrapper'

import './Blog.scss'
import BlogThumbnail from '../../components/atoms/BlogThumbnail/BlogThumbnail'

const metaDetails = {
  title: 'Blog | Annoor Global',
  canonicalUrl: 'www.aanoorglobal.com/blog/',
  metaDesc:
    'Aanoor Global provide multiple services like GST, Income tax filing',
  metaKeywords: 'gst filing, income tax filing'
}

const Blog = () => (
  <>
    <HelmetWrapper data={metaDetails} />
    <div className="mt-5">Blog</div>
    <div className="mt-5 d-flex">
      <BlogThumbnail />
      <BlogThumbnail />
    </div>
  </>
)

export default Blog
