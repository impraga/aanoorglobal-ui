/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react'
import dotted from '../../../../public/assets/images/circle-dotted.png'
import './ServiceContainer.scss'

function ServiceContainer(props) {
  const value = props.data

  return (
    <div className="service-cont w-100 p-4 bg-gray br-1">
      <div className="circle" />
      <div className="dotted">
        <img src={dotted} alt="" />
      </div>
      <div className='d-flex flex-column h-100 justify-content-between'>
        <div>
          <h4 className="title">{value.title}</h4>
          {value.price.isAvailable && (
            <div className="price-cont">
              <p className="price bebas">
                <span className="text-green">₹</span> {value.price.value}
              </p>
              <p className="o-05 mb-3">{value.price.note}</p>
            </div>
          )}
          <hr className="text-green" />
          <p className="benfit-text">Benefits</p>
          <div className="benifts-ul">
            <ul>
              {value.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="view-btn">
          <button type="button" href={value.url}>
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServiceContainer
