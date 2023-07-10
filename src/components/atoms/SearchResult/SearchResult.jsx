// /* eslint-disable react/prop-types */
import React from 'react'
import { PropTypes } from "prop-types";

import './SearchResult.scss'

const SearchResult = (props) =>
  <div className='p-2'>{
    props?.data.map((value) =>
      <div key={value.title}>
        <div className='bg-white text-blue br-1 h-100 d-flex flex-row align-items-center justify-content-between p-3 mb-2 bs' >
          <div>
            <div className='title'>{value.title}</div>
            <div className='category'>{value.category}</div>
          </div>
          <div className='searchresult-btn'>
            <button type='button' className='text-green'>View more</button>
          </div>
        </div>
      </div>
    )
  }</div>

// SearchResult.propTypes = {

// };

export default SearchResult
