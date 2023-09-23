import React from 'react'
import PropTypes from 'prop-types'
import { serviceOrder } from '../../../constants'

import './CategoryDropDown.scss'

const CategoryDropDown = ({ updateCategory, selectedCategory }) => (
  <ul className="md-whiteframe-z1" name="ul-id">
    {serviceOrder.map((cat) => (
      <li
        // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
        role="option"
        key={cat}
        onClick={() => {
          updateCategory(cat)
        }}
        className={`${selectedCategory === cat ? ' active' : ''}`}
        tabIndex="-1"
        aria-hidden
      >
        {cat}
      </li>
    ))}
  </ul>
)

CategoryDropDown.propTypes = {
  updateCategory: PropTypes.func,
  selectedCategory: PropTypes.string
}

CategoryDropDown.defaultProps = {
  updateCategory: () => {},
  selectedCategory: ''
}

export default React.memo(CategoryDropDown)
