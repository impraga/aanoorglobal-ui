import React, { useEffect, useLayoutEffect } from "react"
import { Outlet, useLocation } from 'react-router-dom'
// importing aos
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from './components/organisms/Header/Header'
import Footer from './components/organisms/Footer/Footer'

import './App.scss'
import HandBar from './components/molecules/HandBar/HandBar'

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

  return <div className="App position-relative">
    <Header />
    <Outlet />
    <Footer />
    <HandBar />
  </div>
}

export default App
