import React from 'react'

import './Testimonial.scss'
import dotted from '../../../../public/assets/images/circle-dotted.png'
import quote from '../../../../public/assets/icons/quote.svg'
import Carousel from '../../atoms/Carousel/Carousel'

const Testimonial = () => (
  <div className="bg-white br-1 h-100 bs position-relative overflow-hidden p-4 p-sm-5 testimonial-cont">
    <div>
      <h3>
        Hear out what our <b>clients say</b> about us!
      </h3>
    </div>
    <div className="carousels">
      <Carousel />
    </div>
    <div className="circle-cont" />
    <div className="dotted">
      <img src={dotted} alt="" />
    </div>
    <div className="quote">
      <img src={quote} alt="" />
    </div>
  </div>
)

export default Testimonial
