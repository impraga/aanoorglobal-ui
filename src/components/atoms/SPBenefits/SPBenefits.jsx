import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'
import './SPBenefits.scss'

import registrationBenefits from '../../../../public/assets/icons/registration-benefits.svg'

const SPBenefits = ({ data }) => {
  const { category } = useParams()

  return (
    <div className="pb-0 mb-4 benefits-cont container" id={data.id}>
      <div className={`${category === 'registration' ? 'row' : ''}`}>
        <div className={`${category === 'registration' ? 'col-md-8' : ''}`}>
          <h3 className="mb-3">{data.header}</h3>
          <p className="mb-0">{data.desc && data.desc}</p>
          <ul className="benefits-ul">
            {data.value &&
              data.value.map((benefit) => (
                <div key={benefit.title}>
                  {benefit.title && <h4>{benefit.title}</h4>}
                  {benefit.value &&
                    benefit.value.map((points) => (
                      <li className="bg-gray br-1" key={points}>
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
                ? 'col-md-4 my-3 position-relative'
                : ''
            }`}
          >
            <div className="registration-img-cont">
              <img src={registrationBenefits} alt="decorative" />
            </div>
            <div className="registration-img-bg" />
            <div className="glass">Benefits</div>
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
