import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'
import './SPBenefits.scss'

import registrationBenefits from '../../../../public/assets/icons/registration-benefits.svg'
import factsBenefits from '../../../../public/assets/icons/facts.svg'
import criteriaBenefits from '../../../../public/assets/icons/criteria.svg'
import importantBenefits from '../../../../public/assets/icons/important.svg'

const SPBenefits = ({ data }) => {
  const { category } = useParams()
  const [imgPath, setImgPath] = useState('')

  useEffect(() => {
    if (data?.class === 'facts') {
      setImgPath(factsBenefits)
    } else if (data?.class === 'criteria') {
      setImgPath(criteriaBenefits)
    } else if (data?.class === 'important') {
      setImgPath(importantBenefits)
    } else {
      setImgPath(registrationBenefits)
    }
  }, [])

  return (
    <div
      className="pb-0 mb-4 benefits-cont container overflow-hidden"
      id={data.id}
    >
      <div
        className={`${data?.class || ''} ${
          category === 'registration' ? 'row' : ''
        }`}
      >
        <div
          className={`${category === 'registration' ? 'col-md-8 px-0' : ''}`}
        >
          <h3 className="mb-3" data-aos="fade-left">
            {data.header}
          </h3>
          <p className="mb-3 benefits-desc" data-aos="fade-left">
            {data.desc && data.desc}
          </p>
          <ul className="benefits-ul">
            {data.value &&
              data.value.map((benefit, index) => (
                <div key={benefit.title}>
                  {benefit.title && (
                    <h4 data-aos="fade-left" data-aos-delay={index * 50}>
                      {benefit.title}
                    </h4>
                  )}
                  {benefit.value &&
                    benefit.value.map((points) => (
                      <li
                        className="bg-gray br-1"
                        key={points}
                        data-aos="fade-left"
                        data-aos-delay={index * 50 + 50}
                      >
                        {points}
                      </li>
                    ))}
                </div>
              ))}
          </ul>
        </div>
        {category === 'registration' && (
          <div
            className={`${
              category === 'registration'
                ? 'col-md-4 my-3 position-relative px-0'
                : ''
            }`}
            // }  ${data.value.length > 1 ? 'order-md-first' : ''}`}
          >
            <div className="registration-img-cont">
              <img
                src={imgPath}
                alt="decorative"
                data-aos="zoom-in-up"
                data-aos-delay="50"
              />
            </div>
            <div className="registration-img-bg" />
            <div className="glass" data-aos="zoom-in-up" data-aos-delay="150" />
          </div>
        )}
      </div>
    </div>
  )
}

SPBenefits.propTypes = {
  data: PropTypes.PropTypes.shape()
}

SPBenefits.defaultProps = {
  data: {}
}

export default SPBenefits
