import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Link, useParams } from 'react-router-dom'
import './Blog.scss'
import { serviceOrder } from '../../constants'

import HelmetWrapper from '../../components/atoms/HelmetWrapper/HelmetWrapper'
import BlogThumbnail from '../../components/atoms/BlogThumbnail/BlogThumbnail'
import BlogHeroBanner from '../../components/organisms/BlogHeroBanner/BlogHeroBanner'
import getEnvUrl from '../../constants/envUrl'

const metaDetails = {
  title: 'Blog | Annoor Global',
  canonicalUrl: 'www.aanoorglobal.com/blog/',
  metaDesc:
    'Aanoor Global provide multiple services like GST, Income tax filing',
  metaKeywords: 'gst filing, income tax filing'
}

const Blog = () => {
  const { service } = useParams()
  const [blogList, setBlogList] = useState([])
  const [blogRawList, setBlogRawList] = useState([])
  const [showNoBlog, setShowNoBlog] = useState(false)

  // BlogList API Call
  useEffect(() => {
    setBlogList([])
    axios
      .get(`${getEnvUrl}/getActiveBlogLists`)
      .then(({ data }) => {
        // Only for Data mocking - Remove Below line
        // axios.get('/assets/json/api-mock-bloglist.json').then(({ data }) => {
        if (data.message.length > 0 && data.status === '200') {
          setShowNoBlog(false)
          setBlogRawList(data.message)
        }
      })
      .catch(setShowNoBlog(true))
  }, [])

  // To Update Blog List on Service Change
  useEffect(() => {
    setBlogList([])
    if (!service) {
      // If Service Is not selected - Full Blog list will be rendered
      updateBlogList(blogRawList)
    } else {
      setBlogList([
        {
          service,
          data: blogRawList.filter(
            (blog) => blog.category.toLowerCase() === service.toLowerCase()
          )
        }
      ])
    }
  }, [blogRawList, service])

  // To get Latest 3 Blog List with Service Category
  const updateBlogList = (value) => {
    serviceOrder.forEach((serviceList) => {
      const list = value
        .filter((blog) => blog.category === serviceList) // Filter the Blog List by serviceList
        .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1)) // Sorting the blog list by Date
        .slice(0, 3) // Splicing the Top 3 Blog list
      setBlogList((prev) => [
        ...prev,
        {
          service: serviceList,
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
          {!showNoBlog && blogList.length > 0 ? (
            blogList.map(
              (blogCat, index) =>
                blogCat.data?.length > 0 && (
                  <div key={(blogCat.service, index)}>
                    <div className="my-3 d-flex justify-content-between align-items-center">
                      <div>
                        <h2 className="mb-0">{blogCat.service}</h2>
                      </div>
                      <div>
                        {!service && (
                          <Link to={`/blog/${blogCat.service}`}>View more</Link>
                        )}
                        {service && <Link to="/blog">Back</Link>}
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
            )
          ) : (
            <h2>No Blog available</h2>
          )}
        </div>
      </div>
    </>
  )
}

export default Blog
