/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import PropTypes from 'prop-types'
import './ServiceHeroBanner.scss'
import HeroBannerStartupCentre from '../../atoms/HeroBannerStartupCentre/HeroBannerStartupCentre'
import HeroBannerIntellectualProperty from '../../atoms/HeroBannerIntellectualProperty/HeroBannerIntellectualProperty'

const ServiceHeroBanner = ({ title, desc, price, category }) => {
  const HeroBanner = () => {
    if (category === 'startup-center')
      return <HeroBannerStartupCentre title={title} desc={desc} price={price} />
    if (category === 'intellectual-property')
      return (
        <HeroBannerIntellectualProperty
          title={title}
          desc={desc}
          price={price}
        />
      )
    return <div>/</div>
  }

  return <HeroBanner />
  // <div className="hero-banner-cont d-flex align-items-center justify-content-between">
  //   <div className="container text-white pb-5 my-5">
  //     <div className="row">
  //       <div className="col-md-8 title-cont my-4 my-md-0">
  //         <h1>{title}</h1>
  //         <p>{desc}</p>
  //       </div>
  //       {price.isAvailable && (
  //         <div className="col-md-4 price-cont text-start text-md-end mb-5 mb-md-0">
  //           <p className="just mb-0">Just</p>
  //           <p className="price bebas mb-0">
  //             <span className="text-green">₹ </span>
  //             {price.value}
  //           </p>
  //           <p className="note">{price.note}</p>
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // </div>
}

ServiceHeroBanner.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.shape().isRequired,
  category: PropTypes.string.isRequired
}

export default ServiceHeroBanner
