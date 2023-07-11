import React from 'react'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'

import logo from '../../../../public/assets/icons/aanoor-logo.svg'
import menuList from '../../../../public/assets/json/menuList.json'
import AGButton from '../../atoms/AGButton/AGButton'
import ExpertButton from '../../atoms/ExpertButton/ExpertButton'

import './Header.scss'

const Header = () => {
  const menuWithLink = (item, index) => (
    <li key={`${item.title}_${index}`}>
      {item.pageUrl && <Link to={item.pageUrl}>{item.title}</Link>}
      {item.children && menuWithChildren(item.children, item.title, null, true)}
    </li>
  )

  const menuWithChildren = (list, title, clsName, displayExpertBtn = false) => (
    <>
      {title}
      <div className={clsName || 'first-level'}>
        <div className={clsName ? '' : 'menu-wrapper'}>
          {list?.map((item, index) =>
            Array.isArray(item) ? (
              menuWithChildren(item, null, 'first-level-menu')
            ) : (
              // eslint-disable-next-line react/no-array-index-key
              <div className="first-level-menu" key={`${item.title}_${index}`}>
                <img src={`/assets/images/${item.icon}`} alt="icon" />
                {item.title && <span>{item.title}</span>}
                {item.children && (
                  <ul>
                    {item.children.map((secondMenu, i) =>
                      menuWithLink(secondMenu, i)
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
    <div className="header-bg">
      <div className="lg-container br-1 br-tl-0 br-tr-o bss">
        <header className="container">
          <div className="logo-wrapper">
            <Link to="/">
              <img src={logo} className="logo-img" alt="logo" />
            </Link>
          </div>
          <nav>
            <ul>
              {menuList?.data.map((item, index) => menuWithLink(item, index))}

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
