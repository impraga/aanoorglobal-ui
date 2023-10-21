/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import blogIcon from '../../../../public/assets/icons/blog.png'
import logo from '../../../../public/assets/icons/aanoor-logo.svg'
import menuList from '../../../../public/assets/json/menuList.json'
import AGButton from '../../atoms/AGButton/AGButton'
import ExpertButton from '../../atoms/ExpertButton/ExpertButton'

import './Header.scss'
import URLs from '../../../constants/urlMapper'
import ButtonPrimary from '../../atoms/ButtonPrimary/ButtonPrimary'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [serviceOpen, setServiceOpen] = useState(-1)
  const navigate = useNavigate()

  const hoverRemove = (id) => {
    const ele = window.document.getElementById(id)
    if (ele) ele.style.pointerEvents = 'none'
    setTimeout(() => {
      ele.style.pointerEvents = 'auto'
    }, 10)
  }

  const menuWithLink = (item, device, index) => (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li
      key={item.id || item.title}
      id={item.id}
      className={`item${index + 1} ${
        serviceOpen === item.title ? 'active' : ''
      }`}
      onClick={() => hoverRemove(item.id)}
    >
      {item.pageUrl && (
        <Link
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          to={URLs[item.pageUrl]}
        >
          {item.title}
        </Link>
      )}
      {item.children &&
        device === 'mobile' &&
        menuWithMobileChildren(item.children, item, null, true)}
      {item.children &&
        device === 'desktop' &&
        menuWithDesktopChildren(item.children, item.title, null, true)}
    </li>
  )

  const menuWithMobileChildren = (list, item, clsName, displayExpertBtn) => (
    <>
      {item.title && (
        <span
          aria-hidden
          onClick={() =>
            setServiceOpen(serviceOpen === item.title ? '' : item.title)
          }
        >
          <img
            className="menu-icon"
            src={`/assets/images/${item.icon}`}
            alt="icon"
          />

          {item.title}
          <img
            src="/assets/images/chevron-right.svg"
            alt=""
            className="mobile-chevron "
          />
        </span>
      )}
      <div className={clsName || 'first-level'}>
        <div className="menu-wrapper">
          {item.title && (
            <span
              aria-hidden
              className="title-first-level"
              onClick={() =>
                setServiceOpen(serviceOpen === item.title ? '' : item.title)
              }
            >
              <img
                className="menu-icon"
                src={`/assets/images/${item.icon}`}
                alt="icon"
              />

              {item.title}
              <img
                src="/assets/images/chevron-left.svg"
                alt=""
                className="mobile-chevron "
              />
            </span>
          )}
          <ul>{list.map((d, i) => menuWithLink(d, 'mobile', i))}</ul>
        </div>
        {displayExpertBtn && showExpertsButton()}
      </div>
    </>
  )

  const menuWithDesktopChildren = (
    list,
    title,
    clsName,
    displayExpertBtn = false
  ) => (
    <>
      {title && (
        <span>
          {title === 'Step into' ? 'I WANT TO ' : ''}
          <span className="menu-style">{title.toUpperCase()}</span>
          {title === 'Manage' ? ' MY BUSINESS ' : ''}
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
          {list?.map((item) => (
            <div className={`first-level-menu `} key={item.id}>
              <img src={`/assets/images/${item.icon}`} alt="icon" />
              {item.title && <span>{item.title}</span>}
              {item.children && (
                <ul>
                  {item.children.map((secondMenu, i) =>
                    menuWithLink(secondMenu, 'desktop', i)
                  )}
                </ul>
              )}
            </div>
          ))}
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
      <div className={`lg-container bs ${isMenuOpen ? 'remove-radius' : ''}`}>
        <header className="container-fluid">
          <div className="logo-wrapper">
            <Link to="/">
              <img src={logo} className="logo-img" alt="logo" />
            </Link>
          </div>
          <div className="hamburger-menu">
            <AGButton
              buttonObj={{
                status: isMenuOpen,
                className: 'menu-icon',
                imageDetails: {
                  alt: isMenuOpen ? 'menu-close' : 'menu'
                }
              }}
              handleClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
          <nav className={isMenuOpen ? 'open-menu' : 'close-menu'}>
            {/* desktop menu */}
            <ul className="d-none d-lg-flex ps-0">
              <div />
              <div className="d-flex">
                {menuList?.serviceData.map((item, i) =>
                  menuWithLink(item, 'desktop', i)
                )}
              </div>

              {/* <div className="d-flex align-items-center">
                <li key="blog">
                  <Link to="/blog">
                    <img
                      className="menu-icon mx-2 d-inline-block"
                      src="/assets/images/intellectual-property.svg"
                      alt="icon"
                    />
                    Knowledge factory
                  </Link>
                </li>
              </div> */}
              <div className="d-flex align-items-center">
                <li key="blog">
                  <div onClick={() => navigate('/blog')}>
                    <ButtonPrimary text="Knowledge factory" icon={blogIcon} />
                  </div>
                </li>
              </div>
            </ul>
            {/* mobile menu */}
            <ul className="d-lg-none">
              <div />
              <div>
                {[
                  // eslint-disable-next-line no-unsafe-optional-chaining
                  ...menuList.serviceData[0].children,
                  // eslint-disable-next-line no-unsafe-optional-chaining
                  ...menuList.serviceData[1].children
                ].map((item, i) => menuWithLink(item, 'mobile', i))}

                {/* <li key="blog">
                  <Link to="/blog">
                    <img
                      className="menu-icon d-inline-block"
                      src="/assets/images/intellectual-property.svg"
                      alt="icon"
                    />
                    Knowledge factory
                  </Link>
                </li> */}

                <li key="blog">
                  <div onClick={() => navigate('/blog')}>
                    <ButtonPrimary text="Knowledge factory" icon={blogIcon} />
                  </div>
                </li>
              </div>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default React.memo(Header)
