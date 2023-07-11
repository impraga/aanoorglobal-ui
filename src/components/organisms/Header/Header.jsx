import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'

import logo from '../../../../public/assets/images/logo.png'
import menu from '../../../../public/assets/images/menu.png'
import menuClose from '../../../../public/assets/images/menu-close.png'
import menuList from '../../../../public/assets/json/menuList.json'
import AGButton from '../../atoms/AGButton/AGButton'
import ExpertButton from '../../atoms/ExpertButton/ExpertButton'

import './Header.scss'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [serviceOpen, setServiceOpen] = useState(-1)

  const menuWithLink = (item) => (
    <li key={item.id}>
      {item.pageUrl && <Link to={item.pageUrl}>{item.title}</Link>}
      {item.children && menuWithChildren(item.children, item.title, null, true)}
    </li>
  )

  const menuWithChildren = (list, title, clsName, displayExpertBtn = false) => (
    <>
      {title && (
        <span>
          {title}
          <img
            src="/assets/images/chevron-right.svg"
            alt=""
            className="desktop-chevron d-none d-lg-inline"
          />
        </span>
      )}
      <div
        className={clsName || 'first-level'}
        key={clsName ? 'multi-child' : title}
      >
        <div
          className={clsName ? '' : 'menu-wrapper'}
          key={clsName ? 'multi-child' : title}
        >
          {list?.map((item, index) =>
            Array.isArray(item) ? (
              menuWithChildren(item, null, 'first-level-menu')
            ) : (
              <div
                className={`first-level-menu ${
                  serviceOpen === index ? 'show-service' : ''
                }`}
                key={item.id}
              >
                <img src={`/assets/images/${item.icon}`} alt="icon" />
                {item.title && (
                  <span
                    aria-hidden
                    onClick={() =>
                      serviceOpen >= 0
                        ? setServiceOpen(-1)
                        : setServiceOpen(index)
                    }
                  >
                    {item.title}
                    {isMenuOpen && (
                      <img
                        src="/assets/images/chevron-right.svg"
                        alt=""
                        className="show-chevron"
                      />
                    )}
                  </span>
                )}
                {item.children && (
                  <ul>
                    {item.children.map((secondMenu) =>
                      menuWithLink(secondMenu)
                    )}
                  </ul>
                )}
              </div>
            )
          )}
        </div>
        {displayExpertBtn && showExpertsButton()}
      </div>
    </>
  )

  const showExpertsButton = () => (
    <div className="show-experts-menu">
      <div className="show-experts-menu-wrapper">
        <div className="left-section">
          <p className="title">Still Confused</p>
          <p className="desc o-05">Lets connect and get your work done!</p>
        </div>
        <ExpertButton />
        {/* <AGButton
          buttonObj={{
            className: 'expert-button bg-green',
            text: 'CONNECT WITH EXPERTS'
          }}
        /> */}
      </div>
    </div>
  )

  return (
    <div className="header">
      <div
        className={`lg-container br-1 br-tl-0 br-tr-o ${
          isMenuOpen ? 'remove-radius' : ''
        }`}
      >
        <header className="container">
          <div className="logo-wrapper">
            <Link to="/">
              <img src={logo} className="logo-img" alt="logo" />
            </Link>
          </div>
          <div className="hamburger-menu">
            <AGButton
              buttonObj={{
                className: 'menu-icon',
                imageDetails: {
                  path: isMenuOpen ? menuClose : menu,
                  alt: isMenuOpen ? 'menu-close' : 'menu'
                }
              }}
              handleClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
          <nav className={isMenuOpen ? 'open-menu' : 'close-menu'}>
            <ul>
              {menuList?.data.map((item) => menuWithLink(item))}

              <li key="blog">
                <Button className="blog-btn" variant="success">
                  Blog
                </Button>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default React.memo(Header)
