import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './ServicePageSidePanel.scss'

const ServicePageSidePanel = ({ template, reference }) => {
  const headerHeight = 90
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (reference.length <= 0) return
    document.addEventListener('scroll', handleScroll)
    // eslint-disable-next-line consistent-return
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    const pageYOffset = window.scrollY
    reference.forEach((section, index) => {
      const sectionOffsetTop = section?.offsetTop || 0
      const sectionHeight = section?.offsetHeight || 0

      if (
        pageYOffset >= sectionOffsetTop - headerHeight &&
        pageYOffset < sectionOffsetTop + sectionHeight
      ) {
        setActiveIndex(index)
      }
    })
  }

  return (
    <div
      className="p-2 bg-white br-1 bs side-panel-cont"
      data-aos="fade-up"
      data-aos-delay="50"
    >
      <div>
        {template.map((list, index) => (
          <div
            className={`selector ${activeIndex === index ? ' active' : ''}`}
            key={list.id}
          >
            <a
              key={list.id}
              className="navlink"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({
                  behavior: 'smooth',
                  top: reference[index].offsetTop - headerHeight
                })
              }}
              href={`#${list.id}`}
            >
              {list.id}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

ServicePageSidePanel.propTypes = {
  template: PropTypes.arrayOf(PropTypes.shape()),
  reference: PropTypes.arrayOf(PropTypes.shape()).isRequired
}

ServicePageSidePanel.defaultProps = {
  template: [{}]
}

export default ServicePageSidePanel
