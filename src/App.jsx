import React, { useEffect, useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { HelmetProvider } from 'react-helmet-async'
// importing aos
import AOS from 'aos'
import 'aos/dist/aos.css'
// Importing GSAP for animation
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

// Importing Other components
// import Header from './components/organisms/Header/Header'
import HeaderVersionTwo from './components/organisms/HeaderVersionTwo/HeaderVersionTwo'
import Footer from './components/organisms/Footer/Footer'
import HandBar from './components/molecules/HandBar/HandBar'

import './App.scss'

// GSAP Animation
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const App = () => {
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

  return (
    <HelmetProvider>
      <div className="App position-relative">
        <HeaderVersionTwo />
        <Outlet />
        <Footer />
        <HandBar />
      </div>
    </HelmetProvider>
  )
}

export default App
