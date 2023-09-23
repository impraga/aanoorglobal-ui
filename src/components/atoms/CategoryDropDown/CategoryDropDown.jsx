import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { serviceOrder } from '../../../constants'

import './CategoryDropDown.scss'

const CategoryDropDown = ({ updateCategory }) => {
  const [selectActive, setSelectActive] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('General')

  // To Update Service value after Page renders
  useEffect(() => {
    updateCategory(selectedCategory)
  }, [selectedCategory])

  const changeCategory = (service) => {
    setSelectedCategory(service)
    setSelectActive(false)
  }

  return (
    <div className={`select ${selectActive ? ' active' : ''}`}>
      <input
        type="text"
        placeholder="Select Category"
        onClick={() => {
          setSelectActive(true)
        }}
        value={selectedCategory}
        readOnly
      />
      <ul className="md-whiteframe-z1" name="ul-id">
        {serviceOrder.map((cat) => (
          <li
            // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
            role="option"
            key={cat}
            onClick={() => {
              changeCategory(cat)
            }}
            className={`${selectedCategory === cat ? ' active' : ''}`}
            tabIndex="-1"
            aria-hidden
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  )
}

CategoryDropDown.propTypes = {
  updateCategory: PropTypes.func
}

CategoryDropDown.defaultProps = {
  updateCategory: () => {}
}

export default React.memo(CategoryDropDown)
