import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Button from 'react-bootstrap/Button'

import logo from '../../../../public/assets/icons/aanoor-logo.svg'
import menuList from '../../../../public/assets/json/menuList.json'
import AGButton from '../../atoms/AGButton/AGButton'
import ExpertButton from '../../atoms/ExpertButton/ExpertButton'
import { removeSession } from '../../../utils/tools'
import {
  isKillSwitchDisabled,
  sessionKeys,
  isUserLoggedIn
} from '../../../constants'

import './HeaderVersionTwo.scss'
import URLs from '../../../constants/urlMapper'

const HeaderVersionTwo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeFirstLevelMenu, setActiveFirstLevelMenu] = useState('')
  // const [serviceOpen, setServiceOpen] = useState(-1)

  const navigate = useNavigate()

  const handleClick = () => {
    removeSession(sessionKeys.userLoggedStatus)
    removeSession(sessionKeys.authorization)
    navigate('/ar-admin/login')
  }

  const menuWithLink = (item) => (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <li
      key={item.id}
      className={`${item.className} ${
        activeFirstLevelMenu === item.id ? 'active' : ''
      }`}
      onClick={() =>
        setActiveFirstLevelMenu(activeFirstLevelMenu === item.id ? '' : item.id)
      }
    >
      {item.pageUrl ? (
        <Link key={item.pageUrl} to={URLs[item.pageUrl]}>
          {item.title}
        </Link>
      ) : (
        <>
          <img
            src={`/assets/images/${item.icon}`}
            className="d-inline-block d-lg-none mobile-menu-icon"
            alt={item.title}
          />
          <span>{item.title}</span>
        </>
      )}
      {item.children && (
        <div className={`div-${item.className}`}>
          <ul>{item.children.map((d) => menuWithLink(d))}</ul>
          {item.className === 'first-level' && showExpertsButton()}
        </div>
      )}
    </li>
  )

  // const menuWithChildren = (list, title, clsName, displayExpertBtn = false) => (
  //   <>
  //     {title && (
  //       <span>
  //         {title}
  //         <img
  //           src="/assets/images/chevron-right.svg"
  //           alt=""
  //           className="desktop-chevron d-none d-lg-inline"
  //         />
  //       </span>
  //     )}
  //     <div
  //       className={clsName || 'first-level'}
  //       key={clsName ? 'multi-child' : title}
  //     >
  //       <div
  //         className={clsName ? '' : 'menu-wrapper'}
  //         key={clsName ? 'multi-child' : title}
  //       >
  //         {list?.map((item, index) =>
  //           Array.isArray(item) ? (
  //             menuWithChildren(item, null, 'first-level-menu')
  //           ) : (
  //             <div
  //               className={`first-level-menu ${
  //                 serviceOpen === index ? 'show-service' : ''
  //               }`}
  //               key={item.id}
  //             >
  //               <img src={`/assets/images/${item.icon}`} alt="icon" />
  //               {item.title && (
  //                 <span
  //                   aria-hidden
  //                   onClick={() =>
  //                     serviceOpen >= 0
  //                       ? setServiceOpen(-1)
  //                       : setServiceOpen(index)
  //                   }
  //                 >
  //                   {item.title}
  //                   {isMenuOpen && (
  //                     <img
  //                       src="/assets/images/chevron-right.svg"
  //                       alt=""
  //                       className="show-chevron"
  //                     />
  //                   )}
  //                 </span>
  //               )}
  //               {item.children && (
  //                 <ul>
  //                   {item.children.map((secondMenu) =>
  //                     menuWithLink(secondMenu)
  //                   )}
  //                 </ul>
  //               )}
  //             </div>
  //           )
  //         )}
  //       </div>
  //       {displayExpertBtn && showExpertsButton()}
  //     </div>
  //   </>
  // )

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
                  alt: isMenuOpen ? 'menu-close' : 'menu'
                }
              }}
              handleClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
          <nav className={isMenuOpen ? 'open-menu' : 'close-menu'}>
            <ul>
              {menuList?.serviceData.map((item) => menuWithLink(item))}

              {isKillSwitchDisabled && (
                <li key="blog" className="first-level">
                  <Button
                    className="blog-btn"
                    variant="success"
                    onClick={() => navigate('/dashboard')}
                  >
                    Blog
                  </Button>
                </li>
              )}
              {isUserLoggedIn && (
                <li key="logout" className="first-level">
                  <Button
                    className="logout"
                    variant="primary"
                    onClick={() => handleClick()}
                  >
                    Logout
                  </Button>
                </li>
              )}
            </ul>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default React.memo(HeaderVersionTwo)
