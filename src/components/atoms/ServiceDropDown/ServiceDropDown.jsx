import React, { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { services } from '../../../constants'
import category from '../../../../public/assets/json/service.json'

import './ServiceDropDown.scss'

const ServiceDropDown = ({ updateValue }) => {
  const [selectActive, setSelectActive] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

  const serviceCategory = useMemo(() => {
    const flatCategory = [...services]
    category.forEach((value) => {
      value.child.forEach((service) => {
        flatCategory.push({ title: service.title, url: service.url })
      })
    })
    setSelectedService(services[0].title)

    return flatCategory
  }, [])

  // To Update Service value after Page renders
  useEffect(() => {
    updateValue(selectedService)
  }, [selectedService])

  const changeService = (service) => {
    setSelectedService(service)
    setSelectActive(false)
  }

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
              changeService(service.title)
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
  updateValue: PropTypes.func
}

ServiceDropDown.defaultProps = {
  updateValue: () => {}
}

export default React.memo(ServiceDropDown)
