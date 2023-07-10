/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import './SearchBox.scss'
import search from '../../../../public/assets/icons/search.svg'
import category from '../../../../public/assets/json/service.json'
import SearchResult from '../../atoms/SearchResult/SearchResult'

const SearchBox = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchResult, setSearchResult] = useState([])
  const flatCategory = []

  // Maniplating the category data for search results
  category.forEach((value) => {
    value.child.forEach((service) => {
      service.category = value.category
      flatCategory.push(service)
    })
  })

  // Function to filter by text
  function searchService(objectArray, quickCriteria) {
    return objectArray.filter(obj => Object.values(obj).some(val => val ? val.toString().toLowerCase().includes(quickCriteria) : false))
  }

  const searchValue = (event) => {
    const { value } = event.target
    if (value) {
      setIsSearchOpen(true)
      setSearchResult(searchService(flatCategory, value.toLowerCase()))
    } else {
      setIsSearchOpen(false)
      setSearchResult([])
    }
  }

  return (
    <div>
      <div className={`search-main-cont  ${isSearchOpen ? "active" : ""}`}>
        <div data-aos="fade-up" data-aos-delay="450">
          <input onChange={event => searchValue(event)} type="text" className="form-control search-input br-1 bs" id="" placeholder="Search Service" />
          <button type='submit' className='search-btn bg-green'>
            <img src={search} alt="search button" />
          </button>
        </div>
        <div>
          <div className={`result-cont bg-white br-1 ${isSearchOpen ? "active" : ""}`}>
            <div>
              <SearchResult data={searchResult} />
            </div>
          </div>
        </div>
      </div>
      <div className={`blur-bg  ${isSearchOpen ? "active" : ""}`} onClick={() => { setIsSearchOpen(false) }} />
    </div>
  )
}

export default SearchBox
