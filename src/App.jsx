import React, { useEffect, useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { HelmetProvider } from 'react-helmet-async'
// importing aos
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from './components/organisms/Header/Header'
import Footer from './components/organisms/Footer/Footer'
import HandBar from './components/molecules/HandBar/HandBar'

import './App.scss'

const App = () => {
  const location = useLocation()
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

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
        <Header />
        <Outlet />
        <Footer />
        <HandBar />
      </div>
    </HelmetProvider>
  )
}

export default App
