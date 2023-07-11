/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from "react"

import { Outlet } from 'react-router-dom'
// importing aos
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from './components/organisms/Header/Header'
import Footer from './components/organisms/Footer/Footer'

import './App.scss'
import HandBar from './components/molecules/HandBar/HandBar'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
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
