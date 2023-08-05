import React, { useMemo, useState } from 'react'
import './SearchBox.scss'
import search from '../../../../public/assets/icons/search.svg'
import category from '../../../../public/assets/json/service.json'
import SearchResult from '../../atoms/SearchResult/SearchResult'

const SearchBox = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchResult, setSearchResult] = useState([])

  // Maniplating the category data for search results
  const serviceCategory = useMemo(() => {
    const flatCategory = []
    category.forEach((value) => {
      value.child.forEach((service) => {
        flatCategory.push({ ...service, category: value.category })
      })
    })
    return flatCategory
  }, [])

  // Function to filter by text
  function searchService(objectArray, quickCriteria) {
    return objectArray.filter((obj) =>
      Object.values(obj).some((val) =>
        val ? val.toString().toLowerCase().includes(quickCriteria) : false
      )
    )
  }

  const searchValue = (event) => {
    const { value } = event.target
    if (value) {
      setIsSearchOpen(true)
      setSearchResult(searchService(serviceCategory, value.toLowerCase()))
    } else {
      setIsSearchOpen(false)
      setSearchResult([])
    }
  }

  return (
    <div>
      <div className={`search-main-cont  ${isSearchOpen ? 'active' : ''}`}>
        <div data-aos="fade-up" data-aos-delay="450">
          <input
            onChange={(event) => searchValue(event)}
            type="text"
            className="form-control search-input br-1 bs"
            id=""
            placeholder="Search Service"
          />
          <button type="submit" className="search-btn bg-green">
            <img src={search} alt="search button" />
          </button>
        </div>
        <div>
          <div
            className={`result-cont bg-white br-1 ${
              isSearchOpen ? 'active' : ''
            }`}
          >
            <div>
              <SearchResult data={searchResult} />
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className={`blur-bg  ${isSearchOpen ? 'active' : ''}`}
        onClick={() => {
          setIsSearchOpen(false)
        }}
      />
    </div>
  )
}

export default React.memo(SearchBox)
