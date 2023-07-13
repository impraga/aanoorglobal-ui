import React from 'react'

import './HandBar.scss'

import mail from '../../../../public/assets/icons/mail.png'
import whatsapp from '../../../../public/assets/icons/whatsapp.png'
import phone from '../../../../public/assets/icons/phone.png'

const HandBar = () => (
  <div className='handbar-cont d-lg-none d-block'>
    <nav className="menu ">
      <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" />
      <label className="menu-open-button bs" htmlFor="menu-open">
        <span className="hamburger hamburger-1" />
        <span className="hamburger hamburger-2" />
        <span className="hamburger hamburger-3" />
      </label>

      <a href="https://api.whatsapp.com/send?phone=919884046456=&text=Hello" target="_blank" rel="noreferrer" className="menu-item bs  whatsapp">
        <img src={whatsapp} alt="Whatsapp" />
      </a>
      <a href="mailto:admin@aanoorglobal.com" target="_blank" rel="noreferrer" className="menu-item bs">
        <img src={mail} alt="" />
      </a>
      <a href="tel:+914443554445" target="_blank" rel="noreferrer" className="menu-item bs">
        <img src={phone} alt="" />
      </a>

    </nav>
    <svg className='d-none' xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="shadowed-goo">

          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
          <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
          <feOffset in="shadow" dx="1" dy="1" result="shadow" />
          <feComposite in2="shadow" in="goo" result="goo" />
          <feComposite in2="goo" in="SourceGraphic" result="mix" />
        </filter>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feComposite in2="goo" in="SourceGraphic" result="mix" />
        </filter>
      </defs>
    </svg>
  </div>
)

export default HandBar
