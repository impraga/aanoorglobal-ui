import React from 'react'
import PropTypes from 'prop-types'

import './AGButton.scss'

const AGButton = ({ buttonObj, handleClick }) => (
  <button
    type="button"
    className={`${buttonObj.className} btn`}
    onClick={handleClick}
  >
    {buttonObj.text}
    {buttonObj.imageDetails && (
      <div className="menuToggle">
        <input type="checkbox" readOnly checked={buttonObj.status} />
        <span className="bg-blue" />
        <span className="bg-blue" />
        <span className="bg-blue" />
      </div>
    )}
  </button>
)

AGButton.propTypes = {
  buttonObj: PropTypes.shape(),
  handleClick: PropTypes.func
}

AGButton.defaultProps = {
  buttonObj: {},
  handleClick: () => {}
}

export default AGButton
