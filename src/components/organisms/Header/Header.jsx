import React from 'react'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'

import logo from '../../../../public/assets/images/logo.png'
import menuList from '../../../../public/assets/json/menuList.json'

import './Header.scss'
import AGButton from '../../atoms/AGButton/AGButton'

const Header = () => {
  const menuWithLink = (item) => (
    <li>
      {item.pageUrl && <Link to={item.pageUrl}>{item.title}</Link>}
      {item.children && menuWithChildren(item.children, item.title, null, true)}
    </li>
  )

  const menuWithChildren = (list, title, clsName, displayExpertBtn = false) => (
    <>
      {title}
      <div className={clsName || 'first-level'}>
        {list?.map((item) =>
          Array.isArray(item) ? (
            menuWithChildren(item, null, 'first-level-menu')
          ) : (
            <div className="first-level-menu">
              <img src={item.icon} alt="icon" />
              {item.title && <span>{item.title}</span>}
              {item.children && (
                <ul>
                  {item.children.map((secondMenu) => menuWithLink(secondMenu))}
                </ul>
              )}
            </div>
          )
        )}
        {displayExpertBtn && showExpertsButton()}
      </div>
    </>
  )

  const showExpertsButton = () => (
    <div className="show-experts-menu-wrapper">
      <h3>Still Confused</h3>
      <p>Lets connect and get your work done!</p>
      <AGButton
        buttonObj={{ className: 'expert-button', text: 'CONNECT WITH EXPERTS' }}
      />
    </div>
  )

  return (
    <div className="header-bg">
      <div className="lg-container br-1 br-tl-0 br-tr-o">
        <header className="container">
          <div className="logo-wrapper">
            <Link to="/">
              <img src={logo} className="logo-img" alt="logo" />
            </Link>
          </div>
          <nav>
            <ul>
              {menuList?.data.map((item) => menuWithLink(item))}

              <li>
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

export default Header
