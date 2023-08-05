import React from 'react'
// import PropTypes from 'prop-types'

import './DashboardMetrics.scss'

const DashboardMetrics = () => {
  // Value from API
  const metricsList = [
    {
      title: 'Procedure for Registration of Trademark In India',
      imgUrl: 'certificate.png',
      value: '20',
      category: 'Startup Centre',
      colorCode: 'bg-purple'
    },
    {
      title: 'Procedure for Registration of Trademark In India',
      imgUrl: 'certificate.png',
      value: '20',
      category: 'Intellectual Property',
      colorCode: 'bg-purple'
    },
    {
      title: 'Procedure for Registration of Trademark In India',
      imgUrl: 'certificate.png',
      value: '20',
      category: 'Registration & Liaison Works',
      colorCode: 'bg-purple'
    },
    {
      title: 'Procedure for Registration of Trademark In India',
      imgUrl: 'certificate.png',
      value: '20',
      category: 'Certification & SEC Audits',
      colorCode: 'bg-purple'
    },
    {
      title: 'Procedure for Registration of Trademark In India',
      imgUrl: 'certificate.png',
      value: '20',
      category: 'Statutory Compliance',
      colorCode: 'bg-purple'
    }
  ]
  return (
    <div className="metrics-list-cont d-flex mx-0">
      {metricsList.map((metrics) => (
        <div
          key={metrics.category}
          className="metrics-cont bg-white br-1 bs col"
        >
          <div className="d-flex h-100 flex-row justify-content-between align-items-baseline positon-relative">
            <div className="position-relative d-flex flex-column justify-content-between h-100">
              <div>
                <div className="cat-img-cont d-flex align-items-center justify-content-center">
                  <img src={`/assets/images/${metrics.imgUrl}`} alt="" />
                </div>
                <div
                  className={`cat-img-bg position-absolute ${metrics.colorCode}`}
                />
              </div>
              <div>
                <h3>{metrics.category}</h3>
              </div>
            </div>
            <div className="value-cont">
              <p className="value bebas mb-0">{metrics.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

DashboardMetrics.propTypes = {
  // details: PropTypes.shape()
}

DashboardMetrics.defaultProps = {
  details: {}
}

export default DashboardMetrics
