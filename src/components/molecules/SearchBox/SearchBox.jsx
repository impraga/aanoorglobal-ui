import React, { useState } from 'react'
import './SearchBox.scss'
import search from '../../../../public/assets/icons/search.svg'

const SearchBox = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const searchValue = (event) => {
    const { value } = event.target
    if (value) {
      setIsSearchOpen(true)
    } else {
      setIsSearchOpen(false)
    }
  }

  return (
    <div>
      <div className={`search-main-cont  ${isSearchOpen ? 'active' : ''}`}>
        <input
          onChange={(event) => searchValue(event)}
          type="text"
          className="form-control search-input br-1"
          id=""
          placeholder="Search Service"
        />
        <button type="submit" className="search-btn bg-green">
          <img src={search} alt="search button" />
        </button>
      </div>
      <div className={`blur-bg  ${isSearchOpen ? 'active' : ''}`} />
    </div>
  )
}

export default SearchBox
