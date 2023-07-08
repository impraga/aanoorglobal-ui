/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react'

import './ContactContainer.scss'


function ContactContainer(props) {


  return (
    <div className='bg-white br-1 h-100 contact-container position-relative overflow-hidden'>
      <div className='info-cont d-flex flex-row align-items-center p-3 position-relative'>
        <div className="img-cont">
          <img src={`/assets/icons/${props.data.img}`} alt="" />
        </div>
        <div className='links-cont'>
          <h5 className="city mb-0"><a target='blank' href={props.data.gmap}>{props.data.city}</a></h5>
          <p><a target='blank' href={props.data.gmap}>{props.data.address}</a></p>
          <p className='phone-no'><a target='blank' href={`tel:${props.data.callto}`}>{props.data.phone}</a></p>
        </div>
      </div>
      <div className='contact-bg bg-gray' />
    </div>
  )
}

export default ContactContainer
