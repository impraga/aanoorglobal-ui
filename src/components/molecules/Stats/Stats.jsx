import React, { useEffect } from 'react'

import gsap from 'gsap'

import whiteStripes from '../../../../public/assets/icons/lines-white.svg'
import circleGreen from '../../../../public/assets/icons/circle-green.svg'

import './Stats.scss'

const Stats = () => {
  // Landing Container Animation
  useEffect(() => {
    // gsap.from('#counter', {
    //   innerText: 0,
    //   duration: 2,
    //   ease: 'ease',
    //   snap: {
    //     innerText: 1
    //   }
    // })
  }, [])
  return (
    <div className="bg-db br-1 overflow-hidden position-relative stats-cont bs">
      <div className="d-flex flex-column align-items-center justify-content-evenly text-white text-center px-5 h-100 position-relative">
        <div>
          <div className="count bebas d-flex justify-content-center">
            <div id="counter">10</div>+
          </div>
          <div className="count-name">Years Of Experience</div>
        </div>
        <div>
          <div className="count bebas d-flex justify-content-center">
            <div id="counter">100</div>%
          </div>
          <div className="count-name">Satisfaction</div>
        </div>
        <div>
          <div className="count bebas d-flex justify-content-center">
            <div id="counter">5000</div>+
          </div>
          <div className="count-name">Happy Clients</div>
        </div>
      </div>
      <img className="whites-stripes" src={whiteStripes} alt="white stripes" />
      <img className="circle-green" src={circleGreen} alt="Circle green" />
    </div>
  )
}

export default Stats
