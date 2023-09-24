import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import menuList from '../../../../public/assets/json/menuList.json'
import URLs from '../../../constants/urlMapper'

import './ServiceDropDown.scss'

const ServiceDropDown = ({ updateService, selectedService }) => {
  const [selectActive, setSelectActive] = useState(false)
  const serviceCategory = useMemo(() => {
    const flatCategory = []
    const menu = [
      ...menuList.serviceData[0].children,
      ...menuList.serviceData[1].children
    ]

    menu.forEach((value) => {
      value.children.forEach((service) => {
        flatCategory.push({ title: service.title, url: URLs[service.pageUrl] })
      })
    })

    return flatCategory
  }, [])

  // To Update Service value after Page renders

  return (
    <div className={`select ${selectActive ? ' active' : ''}`}>
      <input
        type="text"
        placeholder="Services looking for?"
        onClick={() => {
          setSelectActive(true)
        }}
        value={selectedService}
        readOnly
      />
      <ul className="md-whiteframe-z1" name="ul-id">
        {serviceCategory.map((service) => (
          <li
            // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
            role="option"
            key={service.title}
            onClick={() => {
              updateService(service.title)
              setSelectActive(false)
            }}
            className={`${selectedService === service.title ? ' active' : ''}`}
            tabIndex="-1"
            aria-hidden
          >
            {service.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

ServiceDropDown.propTypes = {
  updateService: PropTypes.func,
  selectedService: PropTypes.string
}

ServiceDropDown.defaultProps = {
  updateService: () => {},
  selectedService: ''
}

export default React.memo(ServiceDropDown)
