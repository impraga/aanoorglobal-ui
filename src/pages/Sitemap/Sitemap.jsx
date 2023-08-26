import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { sortArray } from '../../utils/tools'
import HelmetWrapper from '../../components/atoms/HelmetWrapper/HelmetWrapper'
import menuList from '../../../public/assets/json/menuList.json'
import { serviceOrder } from '../../constants'

import './Sitemap.scss'

let servicelist = []
let primarylist = []
const metaDetails = {
  title: 'Sitemap | Aanoor Global',
  canonicalUrl: 'www.aanoorglobal.com/site-map',
  metaDesc:
    'Aanoor Global provide multiple services like GST, Income tax filing',
  metaKeywords: 'gst filing, income tax filing'
}

const Sitemap = () => {
  useMemo(() => {
    // servicelist = menuList?.data.filter((menu) => menu.title === 'Services')[0]
    //   ?.children
    servicelist = menuList?.serviceData
    primarylist = menuList?.data.filter((menu) => menu.title !== 'Services')
    servicelist.forEach((element, index) => {
      if (Array.isArray(element)) {
        servicelist.push(...element)
        servicelist.splice(index, 1)
      }
    })
    sortArray(serviceOrder, servicelist)
  }, [])

  return (
    <>
      <HelmetWrapper data={metaDetails} />
      <div>
        <div className="hero-banner-cont d-flex align-items-center">
          <div className="container" data-aos="fade-up" data-aos-delay="0">
            <h1 className="text-white mb-5">Sitemap</h1>
          </div>
        </div>
        <div className="px-2">
          <div
            className="container p-4 sitemap-cont bg-white br-1 bs mb-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <ul className="px-0">
              {primarylist.map((list) => (
                <li key={list.title}>
                  <h2 className="bg-gray">
                    <Link to={list.pageUrl}>{list.title}</Link>
                  </h2>
                </li>
              ))}
              <li className="primary-link ">
                <h2 className="bg-gray">Services</h2>
                <ul className="tree">
                  {servicelist.map((sList) => (
                    <li key={sList.title} className="secondary-link">
                      <h3 className="bg-gray">{sList.title}</h3>
                      <ul>
                        {sList.children.map((child) => (
                          <li key={child.title}>
                            <h4 className="bg-gray">
                              <Link to={child.pageUrl}>{child.title}</Link>
                            </h4>
                            {child?.children?.length > 0 && (
                              <ul className="inner-ul ps-3 pt-1 pb-1">
                                {child?.children?.map((childList) => (
                                  <li key={childList.title}>
                                    <h5 className="bg-gray">
                                      <Link to={childList.pageUrl}>
                                        {childList.title}
                                      </Link>
                                    </h5>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sitemap
