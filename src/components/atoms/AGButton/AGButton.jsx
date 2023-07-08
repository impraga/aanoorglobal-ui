import React from 'react'
import PropTypes from 'prop-types'

const AGButton = ({ buttonObj, handleClick }) => (
  <button
    type="button"
    className={`${buttonObj.className} btn`}
    onClick={handleClick}
  >
    {buttonObj.text}
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
