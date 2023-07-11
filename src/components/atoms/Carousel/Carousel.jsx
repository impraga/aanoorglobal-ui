/* eslint-disable import/no-unresolved */
import React, { useRef, useEffect } from 'react'
import { register } from 'swiper/element/bundle'

import arrowleft from '../../../../public/assets/icons/arrow-blue-left.svg'
import arrowright from '../../../../public/assets/icons/arrow-blue-right.svg'
import './Carousel.scss'

const testimonial = [
  {
    author: 'TCNOM Engineers',
    city: 'Chennai-56',
    value:
      'Really we are very much happy about your guidance and support. We always have a good relationship with Aanoor and share / refer with our friends circle about your prompt work all under one roof'
  },
  {
    author: 'Brassy Technologies',
    city: 'Chennai-96',
    value:
      'Really we are very much happy about your guidance and support. We always have a good relationship with Aanoor and share / refer with our friends circle about your prompt work all under one roof'
  },
  {
    author: 'TradeSter wholesale & retail Pvt Ltd ',
    city: 'Chennai-04',
    value:
      'Really we are very much happy about your guidance and support. We always have a good relationship with Aanoor and share / refer with our friends circle about your prompt work all under one roof'
  }
]

const Carousel = () => {
  const swiperElRef = useRef(null)

  useEffect(() => {
    // Funtion for Swiper
    register()

    const swiperContainer = swiperElRef.current
    const params = {
      pagination: true,
      injectStyles: [
        `
        .swiper-pagination {
          text-align: left !important;
          width:80%;
        }
        .swiper-pagination-bullet-active {
          background: #001b29 !important;
        }
        `
      ],
      // array with CSS urls
      injectStylesUrls: [''],
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev'
      }
    }
    Object.assign(swiperContainer, params)
    swiperContainer.initialize()
  }, [])

  return (
    <div className="carousel-cont h-100">
      <swiper-container
        ref={swiperElRef}
        loop="true"
        speed="500"
        init="false"
        navigation="true"
        pagination="true"
      >
        {testimonial.map((value) => (
          <swiper-slide key={value.author}>
            <div className="d-flex flex-column">
              <div className="value">{value.value}</div>
              <div className="author align-self-end mt-5">- {value.author}</div>
              <div className="city align-self-end">{value.city}</div>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
      <div className="btn-cont">
        <button type="button" className="bg-green swiper-prev">
          <img src={arrowleft} alt="arrow left" />
        </button>
        <button type="button" className="bg-green swiper-next">
          <img src={arrowright} alt="arrow right" />
        </button>
      </div>
    </div>
  )
}

export default Carousel
