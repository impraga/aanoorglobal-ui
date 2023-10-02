import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { serviceOrder } from '../../../constants'

import './CategoryDropDown.scss'

const CategoryDropDown = ({ updateCategory, selectedCategory }) => {
  const [selectActive, setSelectActive] = useState(false)

  return (
    <div className={`select ${selectActive ? ' active' : ''}`}>
      <input
        type="text"
        placeholder="Select Category"
        onClick={() => {
          setSelectActive(true)
        }}
        value={serviceOrder[selectedCategory]}
        readOnly
      />
      <ul className="md-whiteframe-z1" name="ul-id">
        {Object.keys(serviceOrder).map((cat) => (
          <li
            // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
            role="option"
            key={cat}
            onClick={() => {
              updateCategory(cat)
              setSelectActive(false)
            }}
            className={`${selectedCategory === cat ? ' active' : ''}`}
            tabIndex="-1"
            aria-hidden
          >
            {serviceOrder[cat]}
          </li>
        ))}
      </ul>
    </div>
  )
}

CategoryDropDown.propTypes = {
  updateCategory: PropTypes.func,
  selectedCategory: PropTypes.string
}

CategoryDropDown.defaultProps = {
  updateCategory: () => {},
  selectedCategory: ''
}

export default React.memo(CategoryDropDown)
