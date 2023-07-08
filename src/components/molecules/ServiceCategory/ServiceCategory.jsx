
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react'
import './ServiceCategory.scss'

function ServiceCategory(props) {
  return (
    <div className="category-cont bg-white br-1 p-3 w-100 overflow-hidden position-relative">
      <div className="d-flex h-100 flex-column justify-content-between">
        <div className='position-relative'>
          <div className="cat-img-cont d-flex align-items-center justify-content-center">
            <img src={`/assets/images/${props.data.imgUrl}`} alt="" />
          </div>
          <div className={`cat-img-bg position-absolute ${ props.data.colorCode}`}/>
          {/* <div className="cat-img-bg position-absolute bg-white"/> */}
          <h3>{props.data.category}</h3>
        </div>
        <div>
          <p className="o-05 mb-0">{props.data.serviceCount}</p>
        </div>
      </div>
      <div className={`hov-circle ${ props.data.colorCode}`}/>
    </div>
  )
}

export default ServiceCategory
