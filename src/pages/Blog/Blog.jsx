import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Link, useLocation } from 'react-router-dom'
import './Blog.scss'
import { serviceOrder, apiUri } from '../../constants'

import HelmetWrapper from '../../components/atoms/HelmetWrapper/HelmetWrapper'
import BlogThumbnail from '../../components/atoms/BlogThumbnail/BlogThumbnail'
import BlogHeroBanner from '../../components/organisms/BlogHeroBanner/BlogHeroBanner'

const metaDetails = {
  title: 'Blog | Annoor Global',
  canonicalUrl: 'www.aanoorglobal.com/blog/',
  metaDesc:
    'Aanoor Global provide multiple services like GST, Income tax filing',
  metaKeywords: 'gst filing, income tax filing'
}

const Blog = () => {
  const location = useLocation()
  const [servicePath, setServicePath] = useState('')
  const [blogList, setBlogList] = useState([])
  const [blogRawList, setBlogRawList] = useState([])

  // BlogList API Call
  useEffect(() => {
    setBlogList([])
    axios.get(`${apiUri}/getBlogLists`).then(({ data }) => {
      // Only for Data mocking - Remove Below line
      // axios.get('/assets/json/api-mock-bloglist.json').then(({ data }) => {
      if (data.message.length > 0 && data.status === '200') {
        setServicePath(location.pathname?.split('/')[2]?.replace('%20', ' '))
        setBlogRawList(data.message)
      }
    })
  }, [])

  // To Update Service on Location Change
  useEffect(() => {
    setServicePath(location.pathname?.split('/')[2]?.replace('%20', ' '))
  }, [location])

  // To Update Blog List on Service Change
  useEffect(() => {
    setBlogList([])
    if (!servicePath) {
      // If Service Is not selected - Full Blog list will be rendered
      updateBlogList(blogRawList)
    } else {
      setBlogList([
        {
          service: servicePath,
          data: blogRawList.filter(
            (blog) => blog.category.toLowerCase() === servicePath.toLowerCase()
          )
        }
      ])
    }
  }, [servicePath])

  // To get Latest 3 Blog List with Service Category
  const updateBlogList = (value) => {
    serviceOrder.forEach((service) => {
      const list = value
        .filter((blog) => blog.category === service) // Filter the Blog List by service
        .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1)) // Sorting the blog list by Date
        .slice(0, 3) // Splicing the Top 3 Blog list
      setBlogList((prev) => [
        ...prev,
        {
          service,
          data: list
        }
      ])
    })
  }

  return (
    <>
      <HelmetWrapper data={metaDetails} />
      <BlogHeroBanner />
      <div className="blog-cat-cont bg-gray-dark">
        <div className="container">
          {blogList.length > 0 &&
            blogList.map(
              (blogCat, index) =>
                blogCat.data?.length > 0 && (
                  <div key={(blogCat.service, index)}>
                    <div className="my-3 d-flex justify-content-between align-items-center">
                      <div>
                        <h2 className="mb-0">{blogCat.service}</h2>
                      </div>
                      <div>
                        {!servicePath && (
                          <Link to={`/blog/${blogCat.service}`}>View more</Link>
                        )}
                        {servicePath && <Link to="/blog">Back</Link>}
                      </div>
                    </div>
                    <div className="blog-list-cont row mb-4 d-flex align-items-center">
                      {blogCat.data?.map((blog, blogIndex) => (
                        <div
                          key={(blog, blogIndex)}
                          className="col-lg-4 col-sm-6 mb-4"
                        >
                          <BlogThumbnail blog={blog} />
                        </div>
                      ))}
                    </div>
                  </div>
                )
            )}
        </div>
      </div>
    </>
  )
}

export default Blog
