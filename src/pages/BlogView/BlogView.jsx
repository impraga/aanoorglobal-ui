import React, { useEffect, useState } from 'react'
import * as DOMPurify from 'dompurify'
import axios from 'axios'
import { apiUri } from '../../constants/index'
import HelmetWrapper from '../../components/atoms/HelmetWrapper/HelmetWrapper'

import tagIcon from '../../../public/assets/icons/tag.svg'
import blogFb from '../../../public/assets/icons/blog-fb.png'
import blogWhatsapp from '../../../public/assets/icons/blog-whatsapp.png'
import './BlogView.scss'
import RelatedBlogSection from '../../components/organisms/RelatedBlogSection/RelatedBlogSection'

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
    axios.get(`${apiUri}/moreBlogInfo?url=${postUrl}`).then((res) => {
      setBlogList(res.data)
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
                {blogList.tag &&
                  blogList.tag.map((tag) => (
                    <div
                      key={tag}
                      className="tag-tip d-flex align-items-center"
                    >
                      <img src={tagIcon} className="me-2" alt="tag" />
                      <div className="text-white">{tag}</div>
                    </div>
                  ))}
              </div>
              <div className="col-md-4 share-cont d-flex align-items-center justify-content-md-end justify-content-start text-white">
                <div>{blogList.date}</div> <div>•</div>{' '}
                <div className="o-05">Share</div>
                <div className="d-flex icon-cont align-items-center">
                  <img className="fb" src={blogFb} alt="Facebook" />
                  <img className="whatsapp" src={blogWhatsapp} alt="Whatsapp" />
                </div>
              </div>
            </div>
            <div className="order-md-last order-first">
              <h1 className="mt-3 mb-3 text-white">{blogList.title}</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="herobanner-cont br-1 overflow-hidden">
            {blogList.youTubeUrl && (
              <iframe
                width="100%"
                height="auto"
                src={blogList.youTubeUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
            {!blogList.youTubeUrl && blogList.imageUrl && (
              <img src={blogList.imageUrl} alt="herobanner" />
            )}
          </div>
          <div className="mt-4">
            <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />
          </div>
        </div>
      </div>
      <RelatedBlogSection />
    </>
  )
}

export default BlogView
