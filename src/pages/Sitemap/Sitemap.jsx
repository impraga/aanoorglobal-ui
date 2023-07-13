import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import sortArray from '../../utils/tools'
import menuList from '../../../public/assets/json/menuList.json'
import { footerOrder } from '../../constants'

import './Sitemap.scss'

let servicelist = []
let primarylist = []

const Sitemap = () => {
  useMemo(() => {
    servicelist = menuList?.data.filter((menu) => menu.title === 'Services')[0]
      ?.children
    primarylist = menuList?.data.filter((menu) => menu.title !== 'Services')
    servicelist.forEach((element, index) => {
      if (Array.isArray(element)) {
        servicelist.push(...element)
        servicelist.splice(index, 1)
      }
    })
    sortArray(footerOrder, servicelist)
  }, [])

  return (
    <div>
      <div className="hero-banner-cont d-flex align-items-center">
        <div className="container" data-aos="fade-up" data-aos-delay="0">
          <h1 className="text-white mb-5">Sitemap</h1>
        </div>
      </div>
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
          <li className="primary-link">
            <h2 className="bg-gray">Services</h2>
            <ul>
              {servicelist.map((sList) => (
                <li key={sList.title} className="secondary-link">
                  <h3 className="bg-gray">{sList.title}</h3>
                  <ul>
                    {sList.children.map((child) => (
                      <li>
                        <h4 className="bg-gray">
                          <Link to={child.pageUrl}>{child.title}</Link>
                        </h4>
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
  )
}

export default Sitemap
