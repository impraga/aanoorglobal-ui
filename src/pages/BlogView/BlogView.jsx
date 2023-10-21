import React, { useEffect, useState } from 'react'
import * as DOMPurify from 'dompurify'
import axios from 'axios'
import { Link } from 'react-router-dom'
import HelmetWrapper from '../../components/atoms/HelmetWrapper/HelmetWrapper'

import tagIcon from '../../../public/assets/icons/tag.svg'
import blogFb from '../../../public/assets/icons/blog-fb.png'
import blogWhatsapp from '../../../public/assets/icons/blog-whatsapp.png'
import './BlogView.scss'

import RelatedBlogSection from '../../components/organisms/RelatedBlogSection/RelatedBlogSection'
import getEnvUrl, { getEnvUploadPath } from '../../constants/envUrl'

const metaDetails = {
  title: 'Blog | Annoor Global',
  canonicalUrl: 'www.aanoorglobal.com/blog/',
  metaDesc:
    'Aanoor Global provide multiple services like GST, Income tax filing',
  metaKeywords: 'gst filing, income tax filing'
}

const BlogView = () => {
  const path = window.location.pathname.split('/')
  const postUrl = path[2]
  const [blogList, setBlogList] = useState({})
  const cleanHTML = DOMPurify.sanitize(blogList.content)
  useEffect(() => {
    axios.get(`${getEnvUrl}/moreBlogInfo?url=${postUrl}`).then(({ data }) => {
      // axios.get('/assets/json/api-mock-blogView.json').then(({ data }) => {
      if (data.response.length > 0 && data.status === '200') {
        setBlogList(data.response[0])
      }
    })
  }, [])

  return (
    <>
      <HelmetWrapper data={metaDetails} />
      <div className="blog-view-cont bg-white pb-4">
        <div className="blog-header-cont bg-db">
          <div className="container d-flex flex-column">
            <div className="row mt-md-5 mt-0">
              <div className="col-md-8 tag-cont d-flex flex-wrap align-items-center">
                {blogList.tags?.split(';') &&
                  blogList.tags?.split(';').map(
                    (tag) =>
                      tag.trim() && (
                        <Link key={tag.trim()} to={`/blog/tag/${tag.trim()}`}>
                          <div
                            key={tag.trim()}
                            className="tag-tip d-flex align-items-center"
                          >
                            <img src={tagIcon} className="me-2" alt="tag" />
                            <div className="text-white">{tag.trim()}</div>
                          </div>
                        </Link>
                      )
                  )}
              </div>
              <div className="col-md-4 share-cont d-flex align-items-center justify-content-md-end justify-content-start text-white">
                <div>{blogList.posted_date}</div> <div>•</div>{' '}
                <div className="o-05">Share</div>
                <div className="d-flex icon-cont align-items-center">
                  <Link
                    target="_blank"
                    to={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      window.location.href
                    )}`}
                  >
                    <img className="fb" src={blogFb} alt="Facebook" />
                  </Link>
                  {/* <Link
                    target="_blank"
                    to={`https://wa.me/?text=&${encodeURIComponent(sampleUrl)}`}
                    data-action="share/whatsapp/share"
                  >
                    <img
                      className="whatsapp"
                      src={blogWhatsapp}
                      alt="Whatsapp"
                    />
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="order-md-last order-first">
              <h1 className="mt-3 mb-3 text-white">{blogList.title}</h1>
            </div>
          </div>
        </div>
        <div className="container blog-content">
          <div className="herobanner-cont br-1 overflow-hidden">
            {blogList.youtube_url && (
              <iframe
                width="100%"
                height="auto"
                src={blogList.youtube_url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
            {!blogList.youtube_url && blogList.image_name && (
              <img
                src={`${getEnvUploadPath + blogList.image_name}`}
                alt="herobanner"
              />
            )}
          </div>
          <div className="mt-4">
            <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />
          </div>
        </div>
      </div>
      {(blogList.sub_service || blogList.main_service) && (
        <RelatedBlogSection
          serviceName={blogList.sub_service}
          categoryName={blogList.main_service}
        />
      )}
    </>
  )
}

export default BlogView
