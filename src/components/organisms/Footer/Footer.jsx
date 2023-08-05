import React, { useMemo } from 'react'

import { Link } from 'react-router-dom'

import ContactSection from '../ContactSection/ContactSection'

import sortArray from '../../../utils/tools'

import { footerOrder } from '../../../constants'

import menuList from '../../../../public/assets/json/menuList.json'
import whiteStripes from '../../../../public/assets/icons/lines-white.svg'
import rings from '../../../../public/assets/icons/ring.svg'
import logo from '../../../../public/assets/icons/aanoor-logo.svg'
import facebook from '../../../../public/assets/icons/facebook.png'
import linkedin from '../../../../public/assets/icons/linkedin.png'
import twitter from '../../../../public/assets/icons/twitter.png'

import './Footer.scss'

let servicelist = []
let primarylist = []

const Footer = () => {
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
    <footer className="main-footer">
      <ContactSection />
      <div className="footer-cont bg-db position-relative">
        <div className="container pb-2">
          <div className="primary-links-cont d-flex flex-wrap align-items-center justify-content-center justify-content-md-between  ">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-start">
              <div
                className="logo-cont mt-4"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <img src={logo} alt="Aanoor Logo" />
              </div>
              <div className="primary-link d-flex text-white pt-4 px-3">
                {primarylist.map((list, index) => (
                  <Link
                    className="px-3"
                    data-aos="fade-up"
                    data-aos-delay={50 * (index + 1)}
                    key={list.title}
                    to={list.pageUrl}
                  >
                    {list.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="social-link-cont d-flex align-items-center pt-4">
              <div data-aos="fade-up" data-aos-delay="250">
                <a
                  href="https://www.linkedin.com/in/aanoorglobal/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedin} alt="linkedin link" />
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay="300" className="px-3">
                <a
                  href="https://www.facebook.com/aanoorgroup"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={facebook} alt="Facebook link" />
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay="350">
                <a
                  href="https://twitter.com/aanoorgroup"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={twitter} alt="twitter link" />
                </a>
              </div>
            </div>
          </div>
          <div className="service-links-cont d-flex flex-wrap justify-content-center justify-content-lg-between text-white pt-4">
            {servicelist.map((service, index) => (
              <div
                className="cat-cont"
                data-aos="fade-up"
                data-aos-delay={index * 50 + 400}
                key={service.title}
              >
                <div className="title">{service.title}</div>
                <ul>
                  {service.children.map((childs) => (
                    <li key={childs.title}>
                      <Link to={childs.pageUrl}>{childs.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="w-100 d-flex text-white justify-content-lg-end justify-content-center o-05">
            <div className="mx-3">
              <Link to="/sitemap">Sitemap</Link>
            </div>
            <div>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
          </div>
          <hr />
          <div className="copyright-cont d-flex flex-md-row flex-column flex-wrap text-white align-items-center justify-content-center justify-content-md-between ">
            <div className="copyright mb-2">
              © 2010 - 2023 Aanoor Global. All Right Reserved.
            </div>
            <div className="mb-3">
              Developed with <span className="love">♥</span> by{' '}
              <a
                href="https://www.praga.co.in"
                rel="noreferrer"
                target="_blank"
              >
                Praga.co.in
              </a>
            </div>
          </div>
        </div>
        <div className="stripes">
          <img src={whiteStripes} alt="White stripes" />
        </div>
        <div className="rings">
          <img src={rings} alt="ring" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
