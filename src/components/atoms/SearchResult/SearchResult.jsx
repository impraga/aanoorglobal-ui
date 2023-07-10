import React from 'react'
import PropTypes from 'prop-types'

import './SearchResult.scss'

const SearchResult = ({ data }) => (
  <div className="p-2">
    {data?.map((value, keyName) => (
      // eslint-disable-next-line react/no-array-index-key
      <div key={`${value.title}_${keyName}`}>
        <div className="bg-white text-blue br-1 h-100 d-flex flex-row align-items-center justify-content-between p-3 mb-2 bs">
          <div>
            <div className="title">{value.title}</div>
            <div className="category">{value.category}</div>
          </div>
          <div className="searchresult-btn">
            <button type="button" className="text-green">
              View more
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
)

SearchResult.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape())
}

SearchResult.defaultProps = {
  data: [{}]
}

export default SearchResult
