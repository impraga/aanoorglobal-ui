import React from 'react'

import './Stats.scss'
import whiteStripes from '../../../../public/assets/icons/lines-white.svg'
import circleGreen from '../../../../public/assets/icons/circle-green.svg'

const Stats = () => (
  <div className="bg-db br-1 overflow-hidden position-relative stats-cont">
    <div className="d-flex flex-column align-items-center justify-content-evenly text-white text-center px-5 h-100 position-relative">
      <div>
        <div className="count bebas">10+</div>
        <div className="count-name">Years Of Experience</div>
      </div>
      <div>
        <div className="count bebas">100%</div>
        <div className="count-name">Satisfaction</div>
      </div>
      <div>
        <div className="count bebas">5000+</div>
        <div className="count-name">Happy Clients</div>
      </div>
    </div>
    <img className="whites-stripes" src={whiteStripes} alt="white stripes" />
    <img className="circle-green" src={circleGreen} alt="Circle green" />
  </div>
)

export default Stats
