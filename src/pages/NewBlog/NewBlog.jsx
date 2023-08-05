import React from 'react'

import HelmetWrapper from '../../components/atoms/HelmetWrapper/HelmetWrapper'
import BlogForm from '../../components/organisms/BlogForm/BlogForm'

// import './.scss'

const metaDetails = {
  title: 'Blog | Annoor Global',
  canonicalUrl: 'www.aanoorglobal.com/blog/',
  metaDesc:
    'Aanoor Global provide multiple services like GST, Income tax filing',
  metaKeywords: 'gst filing, income tax filing'
}

const NewBlog = () => (
  <>
    <HelmetWrapper data={metaDetails} />
    <div className="mt-5">Blog</div>
    <div className="mt-5 d-flex">
      <BlogForm />
    </div>
  </>
)

export default NewBlog
