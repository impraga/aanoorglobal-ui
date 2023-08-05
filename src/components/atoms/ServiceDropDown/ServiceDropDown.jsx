import React, { useMemo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { services } from '../../../constants'
import category from '../../../../public/assets/json/service.json'

import './ServiceDropDown.scss'

const ServiceDropDown = ({ errors, register, updateValue }) => {
  const [selectActive, setSelectActive] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const currentUrl = document.location.pathname

  const serviceCategory = useMemo(() => {
    const flatCategory = [...services]
    category.forEach((value) => {
      value.child.forEach((service) => {
        flatCategory.push({ title: service.title, url: service.url })
      })
    })
    setSelectedService(
      flatCategory.find((d) => currentUrl === d.url)?.title || services[0].title
    )

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
        className={errors.services?.type === 'required' ? 'error' : ' '}
        placeholder="Services looking for?"
        onClick={() => {
          setSelectActive(true)
        }}
        value={selectedService}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register('services', {
          required: 'Select atleast one services'
        })}
        aria-invalid={errors.services ? 'true' : 'false'}
      />
      {/* {errors.services && (
          <p className="form-error text-danger">
            {errors.services?.message}
          </p>
        )} */}
      {/* {selectedService} */}
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
  errors: PropTypes.shape(),
  register: PropTypes.func,
  updateValue: PropTypes.func
}

ServiceDropDown.defaultProps = {
  errors: { services: {} },
  register: () => {},
  updateValue: () => {}
}

export default React.memo(ServiceDropDown)
