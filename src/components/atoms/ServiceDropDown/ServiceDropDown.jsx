import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import menuList from '../../../../public/assets/json/menuList.json'
import URLs from '../../../constants/urlMapper'

import './ServiceDropDown.scss'

const ServiceDropDown = ({ updateService, selectedService }) => {
  const [selectActive, setSelectActive] = useState(false)
  const serviceCategory = useMemo(() => {
    const flatCategory = [{ title: 'General', url: '', shortUrl: 'general' }]
    const menu = [
      ...menuList.serviceData[0].children,
      ...menuList.serviceData[1].children
    ]

    menu.forEach((value) => {
      value.children.forEach((page) => {
        flatCategory.push({
          title: page.title,
          url: URLs[page.pageUrl],
          shortUrl: URLs[page.pageUrl].split('/')[3]
        })
      })
    })

    return flatCategory
  }, [])

  const showTitleFromUrl = (url) =>
    serviceCategory.find((d) => d.shortUrl === url)?.title

  // To Update Service value after Page renders

  return (
    <div className={`select ${selectActive ? ' active' : ''}`}>
      <input
        type="text"
        placeholder="Services looking for?"
        onClick={() => {
          setSelectActive(true)
        }}
        value={showTitleFromUrl(selectedService)}
        readOnly
      />
      <ul className="md-whiteframe-z1" name="ul-id">
        {serviceCategory.map((service) => (
          <li
            // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
            role="option"
            key={service.title}
            onClick={() => {
              updateService(service.shortUrl)
              setSelectActive(false)
            }}
            className={`${
              selectedService === service.shortUrl ? ' active' : ''
            }`}
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
