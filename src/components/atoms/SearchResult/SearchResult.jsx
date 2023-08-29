import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import ExpertButton from '../ExpertButton/ExpertButton'

import noresult from '../../../../public/assets/icons/noresult.svg'
import URLs from '../../../constants/urlMapper'

import './SearchResult.scss'

const SearchResult = ({ data }) => (
  <div className="h-100 pt-2">
    {data.length > 0 &&
      data?.map((value, keyName) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="px-2 pb-0" key={`${value.title}_${keyName}`}>
          <div className="bg-white text-blue br-1 h-100 d-flex flex-row align-items-center justify-content-between py-3 px-2 px-md-3 mb-2 bs">
            <div>
              <div className="title">{value.title}</div>
              <div className="category">{value.category}</div>
            </div>
            <div className="searchresult-btn text-end">
              <Link to={URLs[value.pageUrl]}>
                <button type="button" className="text-green">
                  View more
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    {data.length === 0 && (
      <div className="d-flex flex-column justify-content-between h-100">
        <div className="text-center noresult-cont h-100 d-flex flex-column align-items-center justify-content-center">
          <img src={noresult} alt="No result found" />
          <p className="text-db">No Results Found!</p>
        </div>
        <div>
          <div className="show-experts-menu-wrapper d-flex flex-column flex-md-row align-item-center justify-content-between bg-db p-3 pb-0">
            <div className="left-section mb-3">
              <p className="title mb-1">Still Confused</p>
              <p className="desc o-05 mb-0">
                Lets connect and get your work done!
              </p>
            </div>
            <div className="mb-3">
              <ExpertButton />
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
)

SearchResult.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape())
}

SearchResult.defaultProps = {
  data: [{}]
}

export default React.memo(SearchResult)
