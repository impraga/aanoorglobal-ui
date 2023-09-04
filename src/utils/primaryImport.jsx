import React, { useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

// importing aos
import AOS from 'aos'
import 'aos/dist/aos.css'
// Importing GSAP for animation
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

const PrimaryImport = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const location = useLocation()
  // Scroll to top if path changes
  useLayoutEffect(() => {
    // window.scrollTo(0, 0)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname])

  // AOS Animation
  useEffect(() => {
    AOS.init({
      duration: 400,
      offset: 80,
      useClassNames: false,
      once: true
    })
  }, [])
}
